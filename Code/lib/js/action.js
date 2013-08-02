//Action binding
var url = 'http://localhost/project/test5july';
var default_sort = 'default';
$('#post_comment').live(
		'click',
		function() {
			$('.popdiv').html();
			$('.fulldiv').show();
			$('.popdiv').show();
			$.ajax({
				url : url + '/?loc=comment/add&req=ajax&frm=load&blog_id='
						+ $('#listed_blog_id').val(),
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {
				},
				success : function(data) {
					$('.popdiv').html(data);
				}
			});
		})

$('#frmCancel').live('click', function() {
	$('.fulldiv').hide();
	$('.popdiv').hide();
});

$('#frmSubmit')
		.live(
				'click',
				function() {
					// if($('#frmCommentdiv').validate()) {

					var rules = "";
					var messages = "";
					rules = {
						name : {
							required : true,
						},
						email : {
							email : true,
							required : true,
						},
						comment : {
							required : true,
						}
					};
					messages = {
						name : {
							required : "Please enter Name."
						},
						email : {
							email : "Need a valid email address.",
							required : "Please enter email.",
						},
						comment : {
							required : "Please enter your comment.",
						}
					};

					// 2. Initiate the validator
					var validator = new jQueryValidatorWrapper(
							"comment_post_form", rules, messages);

					if (validator.validate()) {

						$
								.ajax({
									url : url + '/?loc=comment/add&req=ajax',
									type : 'POST',
									data : {
										name : $('#frmName').val(),
										blog_id : $('#blog_id').val(),
										comment_id : $('#comment_id').val(),
										email : $('#frmEmail').val(),
										comment : $('#frmComment').val()
									},
									error : function(xhr, ajaxOptions,
											thrownError) {

									},
									success : function(data) {
										if (data == 'error') {
											$('.err')
													.html(
															'There is an error to post Comment/Reply. Name, Email and Comment are mendatory. Please fill all fields and submit.');
											$('.err').show(); // .delay(8000).hide();
										} else {
											$('.msg')
													.html(
															"Comment/Reply successfully added.");
											$('.msg').show().delay(800).hide();
											$('.fulldiv').hide();
											$('.popdiv').hide();
											$
													.ajax({
														url : url
																+ '/?loc=comment/commentcount&req=ajax&blog_id='
																+ $(
																		'#listed_blog_id')
																		.val()
																+ '&comment_id='
																+ $(
																		'#comment_id')
																		.val(),
														type : 'get',
														error : function(xhr,
																ajaxOptions,
																thrownError) {

														},
														success : function(data) {
															if ($('#comment_id')
																	.val() != '') {
																$(
																		'#reply_list_'
																				+ $(
																						'#comment_id')
																						.val()
																				+ "_"
																				+ $(
																						'#listed_blog_id')
																						.val())
																		.html(
																				"Reply(s): "
																						+ data);
															} else {
																$(
																		'#click_comments')
																		.html(
																				"Comment(s): "
																						+ data);
																$(
																		'#click_comments')
																		.trigger(
																				'click');
															}
														}

													});
										}

									}
								});
					}
				});

$('#click_comments').live(
		'click',
		function() {
			$.ajax({
				url : url + '/?loc=comment/listcomment&req=ajax&blog_id='
						+ $('#listed_blog_id').val() + '&sort=' + default_sort,
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {

				},
				success : function(data) {
					$('#commentList').show();
					$('#sortoption').show();
					$('#commentList').html(data);
				}
			});
		});

$('.reply').live(
		'click',
		function() {
			var id = this.id.split('_');
			var blog_id = id['3'];
			var comment_id = id['2'];
			$('.popdiv').html();
			$('.fulldiv').show();
			$('.popdiv').show();
			$.ajax({
				url : url + '/?loc=comment/add&req=ajax&frm=load&blog_id='
						+ blog_id + '&comment_id=' + comment_id,
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {

				},
				success : function(data) {
					$('.popdiv').html(data);
				}
			});
		});

$('.replaylist').live(
		'click',
		function() {
			var id = this.id.split('_');
			var blog_id = id['3'];
			var comment_id = id['2'];
			$.ajax({
				url : url + '/?loc=comment/listcomment&req=ajax&blog_id='
						+ $('#listed_blog_id').val() + "&comment_id="
						+ comment_id + '&sort=' + default_sort,
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {

				},
				success : function(data) {
					$('#reply_' + comment_id).toggle();
					$('#reply_' + comment_id).html(data);
				}
			});
		});

$('.likes').live(
		'click',
		function() {
			var id = this.id.split('_');
			var comment_id = id['1'];
			$.ajax({
				url : url + '/?loc=comment/likes&req=ajax&blog_id='
						+ $('#listed_blog_id').val() + "&comment_id="
						+ comment_id,
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {

				},
				success : function(data) {
					if (data != 'error')
						$('#like_' + comment_id).html('Like(s) :' + data);
				}
			});
		});

$('.dislikes').live(
		'click',
		function() {
			var id = this.id.split('_');
			var comment_id = id['1'];
			$
					.ajax({
						url : url + '/?loc=comment/dislikes&req=ajax&blog_id='
								+ $('#listed_blog_id').val() + "&comment_id="
								+ comment_id,
						type : 'get',
						error : function(xhr, ajaxOptions, thrownError) {

						},
						success : function(data) {
							if (data != 'error')
								$('#dislike_' + comment_id).html(
										'Dislike(s) :' + data);
						}
					});
		});

$('.sort').live(
		'click',
		function() {
			default_sort = this.id;
			$.ajax({
				url : url + '/?loc=comment/listcomment&req=ajax&blog_id='
						+ $('#listed_blog_id').val() + '&sort=' + default_sort,
				type : 'get',
				error : function(xhr, ajaxOptions, thrownError) {

				},
				success : function(data) {
					$('#commentList').html(data);
				}
			});
		});