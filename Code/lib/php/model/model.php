<?php
/***************************** Creation Log *******************************
    File Name                   -  model.php
    Module Name                 -  
    Project Name                -
    Description                 -  database interaction
    Version                     -
    Created by                  -  DEEPAK KUMAR
    Created on                  -  July 05, 2013
 ***************************** Update Log ********************************
    SNo        Updated by       Ver            Updated on          Description
 -------------------------------------------------------------------------*/

class ClsDBReturnmodel {
	var $iErrorCode;
	var $iIdentity;
	var $iAffectedRows;
	var $msg;
}

class model {
	var $connection;
	var $table;
	var $DATAARRAY;

	function model() {
		global $DB_SERVER, $DB_LOGIN, $DB_PASSWORD, $DB_COMMON;
		$this->connection = mysql_connect($DB_SERVER, $DB_LOGIN, $DB_PASSWORD)
				or die("Could not connect to MySql.");
		if ($this->connection) {
			$selected = mysql_select_db($DB_COMMON, $this->connection);
		} else {
			echo ("Could not select Database");
		}
	}

	function save() {
		foreach ($this->table as $value) {
			if (isset($_REQUEST[$value . "_id"])
					&& $_REQUEST[$value . "_id"] != NULL) //frimry key is tablename_id and foreign key is f_refTablename_id;
 {
				$this->fnc_Update($value);
			} else {
				$this->fnc_Insert($value);
			}
		}
	}

	function fnc_Insert($arg_sTableName = NULL) {
		if ($arg_sTableName == NULL) {
			$arg_sTableName = $this->table;
		}
		return $this
				->fnc_InsertUpdate($arg_sTableName,
						$arg_FieldValues = $this
								->createInsertUpdateArray($arg_sTableName),
						$arg_sWhere = NULL);
	}

	function fnc_Update($arg_sTableName = NULL) {
		return $this
				->fnc_InsertUpdate($arg_sTableName,
						$arg_FieldValues = $this
								->createInsertUpdateArray($arg_sTableName),
						$arg_sWhere = "'" . $arg_sTableName . "_id ="
								. $_REQUEST[$arg_sTableName . "_id"] . " '");
	}

	function createInsertUpdateArray($arg_sTableName = NULL) {

		$arr = array();
		$result = mysql_query('select * from ' . $arg_sTableName,
				$this->connection);
		if (!$result) {
			die('Query failed: ' . mysql_error());
		}
		$i = 0;
		while ($i < mysql_num_fields($result)) {
			$meta = mysql_fetch_field($result, $i);
			$arr[$meta->name] = $_REQUEST[$meta->name];
			$i++;
		}
		mysql_free_result($result);
		return $arr;
	}

	function select_grid_data($arg_sTableName, $arg_sFieldName,
			$arg_sCondition = NULL) {
		$field_arr = array();
		$arr = array();
		if ($arg_sCondition != NULL)
			$sSQL = 'select ' . $arg_sFieldName . ' from ' . $arg_sTableName
					. " where 1=1 and " . $arg_sCondition;
		else
			$sSQL = 'select ' . $arg_sFieldName . ' from ' . $arg_sTableName
					. " where 1=1";

		$result = mysql_query($sSQL, $this->connection);
		if (!$result) {
			die('Query failed: ' . mysql_error());
		}
		$i = 0;
		while ($i < mysql_num_fields($result)) {
			$meta = mysql_fetch_field($result, $i);
			$field_arr[$i] = $meta->name;
			$i++;
		}

		$NUM = mysql_num_rows($result);

		if ($NUM > 0) {
			$arr = array();
			$arr['count'] = $NUM;
			$i = 0;
			while ($row = mysql_fetch_assoc($result)) {
				$arr['data'][$i] = $row;
				$i = $i + 1;
			}
			//return $arr;
		} else {
			$arr = array();
			$arr['count'] = $NUM;
		}

		$this->DATAARRAY['field'] = $field_arr;
		$this->DATAARRAY['count'] = $arr['count'];
		if (isset($arr['data']) && $arr['data'] != NULL) {
			$this->DATAARRAY['data'] = $arr['data'];
		}

		global $DB_DEBUG_MODE;
		if ($DB_DEBUG_MODE == 0) {
			echo "Sql Query = '" . $sSQL
					. "'</br> DATA ARRAY WITH COUNTING AND DATA";
			print_r($this->DATAARRAY);
		}
		mysql_free_result($result);
		return $this->DATAARRAY;
	}

	function fnc_InsertUpdate($arg_sTableName, $arg_FieldValues, $arg_sWhere) {
		$sSQL = '';

		if ($arg_sWhere == null) {
			$sSQL = "INSERT INTO " . $arg_sTableName . "(";
		} else {
			$sSQL = "UPDATE " . $arg_sTableName . " SET";
		}

		$iFieldCount = count($arg_FieldValues);
		reset($arg_FieldValues);
		$i = 1;

		while (list($key, $value) = each($arg_FieldValues)) {
			if ($i != $iFieldCount) {
				if ($arg_sWhere == null) {
					$sSQL .= " " . $key . ",";
				} else { // Update
					$sSQL .= " " . $key . "='" . $value . "', ";
				}
			} else {
				if ($arg_sWhere == null) {
					$sSQL .= " " . $key . ")" . "  VALUES( '";
				} else { // Update
					$sSQL .= " " . $key . "='" . $value . "'";
				}
			}
			$i++;
		}

		if ($arg_sWhere == null) {
			reset($arg_FieldValues);
			$i = 1;
			while (list($key, $value) = each($arg_FieldValues)) {
				if (is_array($value)) {
					$value = implode(',', $value); //If the field value comming in form of array from the HTML
				} elseif ($value == 'on') {
					$value = 1;
				}
				$sSQL .= $value;
				if ($i != $iFieldCount) {
					$sSQL .= "', '";
				} else {
					$sSQL .= "');";
				}
				$i++;
			}
		} else {
			$sSQL .= " WHERE " . $arg_sWhere;
		}

		//echo   "---".$sSQL."---";
		//print $sSQL.'</br>';
		//die;
		$result = mysql_query($sSQL, $this->connection);

		$objDBReturn = new ClsDBReturnmodel();
		$objDBReturn->iErrorCode = mysql_errno();
		$objDBReturn->iIdentity = mysql_insert_id();
		$objDBReturn->iAffectedRows = mysql_affected_rows();
		global $DB_DEBUG_MODE;
		if ($DB_DEBUG_MODE == 0) {
			echo "Sql Query = '" . $sSQL
					. "'</br> DATA ARRAY WITH COUNTING AND DATA";
			//print_r($this->DATAARRAY);
			echo "Error Code = " . $objDBReturn->iErrorCode;
			echo "Insert ID = " . $objDBReturn->iIdentity;
			echo "Insert ID = " . $objDBReturn->iAffectedRows;
		}
		//mysql_free_result($result);
		return $objDBReturn;
	}

	//function to run a query
	function selectBySQL($arg_sSQL) {
		//echo"**".$arg_sSQL."**";
		$RES = mysql_query($arg_sSQL, $this->connection);

		$NUM = mysql_num_rows($RES);

		if ($NUM > 0) {
			$arr = array();
			$arr['count'] = $NUM;
			$i = 0;
			while ($row = mysql_fetch_assoc($RES)) {
				$arr['data'][$i] = $row;
				$i = $i + 1;
			}
			//return $arr;
		} else {
			$arr = array();
			$arr['count'] = $NUM;
		}

		$this->DATAARRAY['count'] = $arr['count'];
		if (isset($arr['data']) && $arr['data'] != NULL) {
			$this->DATAARRAY['data'] = $arr['data'];
		}

		global $DB_DEBUG_MODE;
		if ($DB_DEBUG_MODE == 0) {
			echo "Sql Query = '" . $arg_sSQL . "'</br>";
			print_r($this->DATAARRAY);
		}

		mysql_free_result($RES);
		return $this->DATAARRAY;
	}

	function select($id = NULL) {
		if ($id == NULL)
			$sSQL = " SELECT*FROM " . $this->table . " ";
		else
			$sSQL = " SELECT*FROM " . $this->table . " WHERE " . $this->table
					. "_id=" . $id;

		$RES = mysql_query($sSQL, $this->connection);

		$NUM = mysql_num_rows($RES);

		if ($NUM > 0) {
			$arr = array();
			$arr['count'] = $NUM;
			$i = 0;
			while ($row = mysql_fetch_assoc($RES)) {
				$arr['data'][$i] = $row;
				$i = $i + 1;
			}
			//return $arr;
		} else {
			$arr = array();
			$arr['count'] = $NUM;
		}

		$this->DATAARRAY['count'] = $arr['count'];
		if (isset($arr['data']) && $arr['data'] != NULL) {
			$this->DATAARRAY['data'] = $arr['data'];
		}
		global $DB_DEBUG_MODE;
		if ($DB_DEBUG_MODE == 0) {
			echo "Sql Query = '" . $sSQL
					. "'</br> DATA ARRAY WITH COUNTING AND DATA";
			print_r($this->DATAARRAY);
		}
		mysql_free_result($RES);
		return $this->DATAARRAY;
	}

	function displayDataArray() {

	}

	//delete a record from the table on condition base;
	function fnc_delete($table, $condition) {
		$sSQL = 'DELETE FROM ' . $table . '  WHERE ' . $condition;
		//echo"**".$arg_sSQL."**";
		global $DB_DEBUG_MODE;
		if ($DB_DEBUG_MODE == 0) {
			echo "Sql Query = '" . $sSQL
					. "'</br> DATA ARRAY WITH COUNTING AND DATA";
		}
		return mysql_query($sSQL, $this->connection);
	}

	//function to disconnect database connection
	function disConnect() {
		if ($this->connection) {
			mysql_close($this->connection);
		} else {
			echo ("Cannot close non-existent connection");
		}
	}
}
?>