


var roomList = {

	el: {
		darkBg: document.getElementById('darkBg'),
		crtNwRmBtn: document.getElementById('crtNwRmBtn'),
		createRoomModal: document.getElementById('createRoomModal'),
		roomModal: document.getElementsByClassName("room-modal"),
		opnSlctGene: document.getElementsByClassName('opnSlctGene')
	},

	init: function(){



		//RoomList > opnSlctGene 클릭 시 EVENT
		this.el.opnSlctGene.onclick=function(e){
			
			e.preventDefault;

			
		};



		//RoomList > CreateNewRoom 클릭 시 EVENT
		this.el.crtNwRmBtn.onclick=function(e){
			
			e.preventDefault;

			//classList, supported from IE10
			roomList.el.darkBg.classList.add("bg-open");
			roomList.el.createRoomModal.classList.remove("hd");

		};






		//어둠배경 클릭 시 EVENT
		this.el.darkBg.onclick=function(e){
			
			e.preventDefault;

			this.classList.remove("bg-open");


			for (var i = 0; i < roomList.el.roomModal.length; ++i) {
				roomList.el.roomModal[i].classList.add("hd");
			}
		}


	}

}


roomList.init();