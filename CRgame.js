var ply=3;
var turn=0;
function t_inc(){
	turn++;
}
function inc(id,val) {
	val++;
	if(id%11!=0&&id%11!=10&&id>11&&id<54){
		color_change_mid(id,val%4);
		//document.getElementById(id).innerHTML=val%4;
		document.getElementById(id).value=val%4;
		if(val%4==0){
			mid_exp(id,val);
		}
	}

	else if((id%11==0&&id!=55&&id!=0)||(id%11==10&&id!=65&&id!=10)||(id>0&&id<10)||(id>55&&id<65)){
		color_change_edge(id,val%3);
		//document.getElementById(id).innerHTML=val%3;
		document.getElementById(id).value=val%3;
		if(val%3==0&&id%11==0){
			l_edge_exp(id,val);
		}
		else if(val%3==0&&id%11==10){
			r_edge_exp(id,val);
		}
		else if(val%3==0&&id>0&&id<10){
			t_edge_exp(id,val);
		}
		else if(val%3==0&&id>55&&id<65){
			b_edge_exp(id,val);
		}
	}

	else if(id==0||id==10||id==55||id==65){
		color_change_cor(id,val%2);
		//document.getElementById(id).innerHTML=val%2;
		document.getElementById(id).value=val%2;
		if(val%2==0&&id==0){
			inc(id+1,document.getElementById(id+1).value);
			inc(id+11,document.getElementById(id+11).value);
		}
		else if(val%2==0&&id==10){
			inc(id-1,document.getElementById(id-1).value);
			inc(id+11,document.getElementById(id+11).value);
		}
		else if(val%2==0&&id==55){
			inc(id+1,document.getElementById(id+1).value);
			inc(id-11,document.getElementById(id-11).value);
		}
		else if(val%2==0&&id==65){
			inc(id-1,document.getElementById(id-1).value);
			inc(id-11,document.getElementById(id-11).value);
		}
	}
};

function color_change_mid(id,val) {
	if(turn%ply==0){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#99ff99";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#33ff33";
				break;
			case 3:
				document.getElementById(id).style.backgroundColor="#009900";
				break;
		}
	}
	else if(turn%ply==1){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#ff9999";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#ff4d4d";
				break;
			case 3:
				document.getElementById(id).style.backgroundColor="#ff0000";
				break;
		}
	}
	else if(turn%ply==2){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#80b3ff";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#3385ff";
				break;
			case 3:
				document.getElementById(id).style.backgroundColor="#0047b3";
				break;
		}
	}
};

function color_change_edge(id,val) {
	if(turn%ply==0){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#33ff33";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#009900";
				break;
		}
	}
	else if(turn%ply==1){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#ff4d4d";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#ff0000";
				break;
		}
	}
	else if(turn%ply==2){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#3385ff";
				break;
			case 2:
				document.getElementById(id).style.backgroundColor="#0047b3";
				break;
		}
	}
};

function color_change_cor(id,val) {
	if(turn%ply==0){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#009900";
				break;
		}
	}
	else if(turn%ply==1){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#ff0000";
				break;
		}
	}
	else if(turn%ply==2){
		switch(val){
			case 0:
				document.getElementById(id).style.backgroundColor="white";
				break;
			case 1:
				document.getElementById(id).style.backgroundColor="#0047b3";
				break;
		}
	}
};

function mid_exp(id,val) {
	inc(id+1,document.getElementById(id+1).value);		//r_exp
	inc(id-1,document.getElementById(id-1).value);		//l_exp
	inc(id+11,document.getElementById(id+11).value);	//d_exp
	inc(id-11,document.getElementById(id-11).value);	//u-exp
};

function l_edge_exp(id,val) {
	inc(id+1,document.getElementById(id+1).value);		//r_exp
	inc(id+11,document.getElementById(id+11).value);	//d_exp
	inc(id-11,document.getElementById(id-11).value);	//u-exp
};

function r_edge_exp(id,val) {
	inc(id-1,document.getElementById(id-1).value);		//l_exp
	inc(id+11,document.getElementById(id+11).value);	//d_exp
	inc(id-11,document.getElementById(id-11).value);	//u-exp
};

function t_edge_exp(id,val) {
	inc(id+1,document.getElementById(id+1).value);		//r_exp
	inc(id-1,document.getElementById(id-1).value);		//l_exp
	inc(id+11,document.getElementById(id+11).value);	//d_exp
};

function b_edge_exp(id,val) {
	inc(id+1,document.getElementById(id+1).value);		//r_exp
	inc(id-1,document.getElementById(id-1).value);		//l_exp
	inc(id-11,document.getElementById(id-11).value);	//u_exp
};