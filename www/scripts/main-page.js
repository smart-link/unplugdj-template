


var mainPage = {

	el: {
	 	loginBtn: document.getElementById('loginBtn'),
		darkBg: document.getElementById('darkBg'),
		signModal: document.getElementById('signModal'),
		signUpFrm: document.getElementById('signUpFrm'),
		signInFrm: document.getElementById('signInFrm'),
		signUp:document.getElementById('signUp'),
		signIn:document.getElementById('signIn'),
	},

	init: function(){

		//메인에서 로그인 클릭 시 EVENT
		this.el.loginBtn.onclick=function(e){
			
			e.preventDefault;

			//classList, supported from IE10
			mainPage.el.darkBg.classList.add("bg-open");

			// mainPage.el.darkBg.className = mainPage.el.darkBg.className + " bg-open";

			mainPage.el.signUpFrm.classList.add("hd");
			mainPage.el.signInFrm.classList.remove("hd");
			mainPage.el.signModal.classList.remove("hd");


		};


		//회원가입 링크 클릭 시 EVENT
		this.el.signUp.onclick=function(e){
			
			e.preventDefault;

			this.classList.remove("bg-open");

			mainPage.el.signUpFrm.classList.remove("hd");
			mainPage.el.signInFrm.classList.add("hd");
			mainPage.el.signModal.classList.remove("hd");


		};

		//로그인 링크 클릭 시 EVENT
		this.el.signIn.onclick=function(e){
			
			e.preventDefault;

			//classList, supported from IE10
			mainPage.el.darkBg.classList.add("bg-open");

			mainPage.el.signUpFrm.classList.add("hd");
			mainPage.el.signInFrm.classList.remove("hd");
			mainPage.el.signModal.classList.remove("hd");

		};




		//어둠배경 클릭 시 EVENT
		this.el.darkBg.onclick=function(e){
			
			e.preventDefault;

			this.classList.remove("bg-open");

			mainPage.el.signModal.classList.add("hd");


		}


	}

}


mainPage.init();