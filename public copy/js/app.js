(function() {
	"use strict";

	/*****************************************/
	/*      CONSTRUCT    */
	/*****************************************/
	const InstagramModule = function() {
		const headerSearch = document.getElementById('header-search');
		const postCommentInput = document.getElementById('insta-comment-post-form');
		const newUserInput = document.getElementById('new-user-form');
		////////////////////////////////////////////
		// CLASS :
		////////////////////////////////////////////
		class PostDetails {

			// our keys  ||| object keys we are pulling from
			constructor(postObj) {
				// this.userName = postObj.user_name;
				// this.userImage = postObj.user_image;
				// this.userEmail = postObj.email;
				// this.postLikes = postObj.likes; //
				// wait on seeing object to complete this -

				console.log('CLASS : this --> ', this);
				this.build();
			}
			////////////////////////////////////////////
			// BUILD :: GENERATE TEMPLATE
			build() {
				// grab a string of html
				const source = $('#insta-post-template').html();
				//turns that string into a handlebars function
				const template = Handlebars.compile(source);
				const context = {
					// userName: this.userName,
					// userImage: this.userImage,
					// userEmail: this.userEmail //
					// wait on seeing object to complete this --
				};
				const html = template(context);

				$('#main-template-container').prepend(html);

			} // end build func
		} // end of CLASS

		/////////////////////////////////////
		// FUNCTION:  API :: SEARCH RESULTS
		/////////////////////////////////////
		function APISearchRequest(query) {
			query = encodeURIComponent(query);
			$.ajax({
				method: 'GET',
				url: `https://???/api/???query=${query}`,
				dataType: 'json',
				header: {
					"content-type": "application/json;charset=utf-8"
				}

			}).then((response) => {
				console.log(response[0]);
				new PostDetails(response);

				// let topResults = response.splice(0, 5);
				// for (let i = 0; i < topResults.length; i++) {
				// 	new PostDetails(topResults[i]);
				// }
				// console.log('new PostDetails response --> ', response);
			}).catch((error) => {
				console.log(error);
			});
		}

		/////////////////////////////////////
		// FUNCTION:  API :: POST COMMENT
		/////////////////////////////////////
		function APIPostComment(comment) {
			const settings = {
				method: 'POST',
				url: `https://`,
				crossDomain: true,
				dataType: 'json',
				data: {
					"user_name": name,
					"comment": comment
				}
			};
			console.log(comment);
			$.ajax(settings).then((response) => {
				console.log('success!');
			}).catch((error) => {
				console.log('error in ajax ', error);
			});
		}

		/////////////////////////////////////
		// FUNCTION: BIND EVENTS
		/////////////////////////////////////
		function bindEvents() {
			///////////// ON CLICK : GET INPUT  /////////////
			headerSearch.addEventListener('submit', () => {
				event.preventDefault();
				console.log(event);
				const searchValue = event.target[0].value; //grab value from input
				console.log('input --> ', searchValue);
				APISearchRequest(searchValue); // pass value to APIRequest()
				headerSearch.reset(); // clear form
			});
			///////////// ON CLICK : POST COMMENT  /////////////
			// postCommentInput.addEventListener('submit', () => {
			// 	event.preventDefault();
			// 	console.log('in postCommentInput');
			// 	const commentValue = event.target[0].value;
			// 	// APIPostComment(commentValue);
			// 	// postCommentInput.reset();
			// });
			///////////// ON CLICK : NEW USER  /////////////
			newUserInput.addEventListener('submit', () => {
				event.preventDefault();
				console.log(event);
				const searchValue = event.target[0].value; //grab value from input
				console.log('input --> ', searchValue);
				//APISearchRequest(searchValue); // pass value to APIRequest()
				//newUserInput.reset(); // clear form
			});

		} // END BIND EVENTS


		/////////////////////////////////////
		// FUNCTION: INIT
		/////////////////////////////////////
		function init() {
			bindEvents();
			console.log('in');
		} // end of init

		return {
			init: init
		}; // end return
	}; // end construct

	const instagramApp = InstagramModule();
	instagramApp.init();
})(); // END END
