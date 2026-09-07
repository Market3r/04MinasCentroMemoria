// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: centro de mem�ria MTC1.ggsk
// Generated 2026-09-07T13:52:36

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('volume', 1, 2, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('width_share_container', 1, 0, { ignoreInState: 0  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_hotspot_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_auto_hide_controller', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_map_close_desktop', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map_close_mobile', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_cozinha', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_social', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_acesso', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_toilette', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_doca', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_camarim', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mezanino', 2, false, { ignoreInState: 0  });
	player.addVariable('v_cat_ativa', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('var1', 1, 0, { ignoreInState: 0  });
	player.addVariable('cat_aberta', 2, false, { ignoreInState: 0  });
	player.addVariable('var_titulo_atual', 0, "", { ignoreInState: 0  });
	player.addVariable('esconder_cursor', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview_1', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_menu_tooltip_1', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._hide_system_cursor=document.createElement('div');
		el.ggId="hide_system_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='cursor: none !important; pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_system_cursor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_system_cursor.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hide_system_cursor);
		el=me._float_cursor=document.createElement('div');
		el.ggId="float_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='transform-style: preserve-3d; cursor: none !important;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._float_cursor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._float_cursor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.description == "hide"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._float_cursor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._float_cursor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._float_cursor.style.transition='';
				if (me._float_cursor.ggCurrentLogicStateVisible == 0) {
					me._float_cursor.style.visibility="hidden";
					me._float_cursor.ggVisible=false;
				}
				else {
					me._float_cursor.style.visibility=(Number(me._float_cursor.style.opacity)>0||!me._float_cursor.style.opacity)?'inherit':'hidden';
					me._float_cursor.ggVisible=true;
				}
			}
		}
		me._float_cursor.logicBlock_visible();
		me._float_cursor.ggUpdatePosition=function (useTransition) {
		}
		el=me._ring_white=document.createElement('div');
		el.ggId="ring_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 10px solid rgba(255,255,255,0.294118);';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,0px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ring_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('esconder_cursor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring_white.style.transition='border-color 0s';
				if (me._ring_white.ggCurrentLogicStateVisible == 0) {
					me._ring_white.style.visibility="hidden";
					me._ring_white.ggVisible=false;
				}
				else {
					me._ring_white.style.visibility=(Number(me._ring_white.style.opacity)>0||!me._ring_white.style.opacity)?'inherit':'hidden';
					me._ring_white.ggVisible=true;
				}
			}
		}
		me._ring_white.logicBlock_visible();
		me._ring_white.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.hotspot.title != ""))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._ring_white.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._ring_white.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._ring_white.style.transition='border-color 0s';
				if (me._ring_white.ggCurrentLogicStateBorderColor == 0) {
					me._ring_white.style.borderColor="rgba(255,255,255,0.686275)";
				}
				else {
					me._ring_white.style.borderColor="rgba(255,255,255,0.294118)";
				}
			}
		}
		me._ring_white.logicBlock_bordercolor();
		me._ring_white.ggUpdatePosition=function (useTransition) {
		}
		me._float_cursor.appendChild(me._ring_white);
		me.divSkin.appendChild(me._float_cursor);
		el=me._float_cursor_code=document.createElement('div');
		el.ggId="float_cursor_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='cursor: none !important; pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._float_cursor_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._float_cursor_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._float_cursor_code);
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 146px;';
		hs+='position : absolute;';
		hs+='right : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['buttons_social']=true;
		}
		me._buttons_social.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['buttons_social']=false;
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_wpp=document.createElement('div');
		els=me._button_wpp__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjQ5NjhjNTI3NTkiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzIuMDM5MDYyIDMyLjAzOTA2MiBMIDc3Ny45NjA5MzggMzIuMDM5MDYyIEwgNzc3Ljk2MDkzOC'+
			'A3NzcuOTYwOTM4IEwgMzIuMDM5MDYyIDc3Ny45NjA5MzggWiBNIDMyLjAzOTA2MiAzMi4wMzkwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjBmNTM3ODQzNmQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDMyLjAzOTA2MiBDIDE5OS4wMTk1MzEgMzIuMDM5MDYyIDMyLjAzOTA2MiAxOTkuMDE5NTMxIDMyLjAzOTA2MiA0MDUgQyAzMi4wMzkwNjIgNjEwLjk4MDQ2OSAxOTkuMDE5NTMxIDc3Ny45NjA5MzggNDA1IDc3Ny45NjA5MzggQyA2MTAuOTgwNDY5IDc3Ny45NjA5MzggNzc3Ljk2MDkzOCA2MTAuOTgwNDY5IDc3Ny45NjA5MzggNDA1IEMgNzc3'+
			'Ljk2MDkzOCAxOTkuMDE5NTMxIDYxMC45ODA0NjkgMzIuMDM5MDYyIDQwNSAzMi4wMzkwNjIgWiBNIDQwNSAzMi4wMzkwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImNjYmNjOWM2ZTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC4wMzkwNjI1IDAuMDM5MDYyNSBMIDc0NS45NjA5MzggMC4wMzkwNjI1IEwgNzQ1Ljk2MDkzOCA3NDUuOTYwOTM4IEwgMC4wMzkwNjI1IDc0NS45NjA5MzggWiBNIDAuMDM5MDYyNSAwLjAzOTA2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjhjZDEzOTA1NzYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbn'+
			'plcm8iIGQ9Ik0gMzczIDAuMDM5MDYyNSBDIDE2Ny4wMTk1MzEgMC4wMzkwNjI1IDAuMDM5MDYyNSAxNjcuMDE5NTMxIDAuMDM5MDYyNSAzNzMgQyAwLjAzOTA2MjUgNTc4Ljk4MDQ2OSAxNjcuMDE5NTMxIDc0NS45NjA5MzggMzczIDc0NS45NjA5MzggQyA1NzguOTgwNDY5IDc0NS45NjA5MzggNzQ1Ljk2MDkzOCA1NzguOTgwNDY5IDc0NS45NjA5MzggMzczIEMgNzQ1Ljk2MDkzOCAxNjcuMDE5NTMxIDU3OC45ODA0NjkgMC4wMzkwNjI1IDM3MyAwLjAzOTA2MjUgWiBNIDM3MyAwLjAzOTA2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjEwN2VmN2E3NjciPgogICA8cmVjdCB3'+
			'aWR0aD0iNzQ2IiB4PSIwIiB5PSIwIiBoZWlnaHQ9Ijc0NiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI3ZDUzZmM1OWNkIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDE3NC41NjY0MDYgMTczLjMwMDc4MSBMIDYzNS4wNjY0MDYgMTczLjMwMDc4MSBMIDYzNS4wNjY0MDYgNjM2LjgwMDc4MSBMIDE3NC41NjY0MDYgNjM2LjgwMDc4MSBaIE0gMTc0LjU2NjQwNiAxNzMuMzAwNzgxICIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBjbGlwLXBhdGg9InVybCgjNDk2OGM1Mjc1OSkiPgogIDxnIGNsaXAtcGF0aD0idXJsKCMwZjUzNzg0MzZkKSI+CiAgIDxnIH'+
			'RyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDMyLCAzMikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzEwN2VmN2E3NjcpIj4KICAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2NiY2M5YzZlNykiPgogICAgICA8ZyBjbGlwLXBhdGg9InVybCgjOGNkMTM5MDU3NikiPgogICAgICAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMDM5MDYyNSAwLjAzOTA2MjUgTCA3NDUuOTYwOTM4IDAuMDM5MDYyNSBMIDc0NS45NjA5MzggNzQ1Ljk2MDkzOCBMIDAuMDM5MDYyNSA3NDUuOTYwOTM4IFogTSAwLjAzOTA2MjUgMC4wMzkwNjI1ICIgZmlsbD0i'+
			'IzI3MjcyNyIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzdkNTNmYzU5Y2QpIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTSA1NjguMjM0Mzc1IDI0MC44MjQyMTkgQyA1MjQuOTE3OTY5IDE5Ny40NjA5MzggNDY3LjMxNjQwNiAxNzMuNTM5MDYyIDQwNS45Mzc1IDE3My41MzkwNjIgQyAyNzkuNDY4NzUgMTczLjUzOTA2MiAxNzYuNTM1MTU2IDI3Ni40NDkyMTkgMTc2LjQ4ODI4MSA0MDIuOTYwOTM4IEMgMTc2LjQ4ODI4MSA0NDMuMzk0NTMxIDE4Ny4wNDI5NjkgND'+
			'gyLjg4NjcxOSAyMDcuMTIxMDk0IDUxNy42NjQwNjIgTCAxNzQuNTY2NDA2IDYzNi41NTQ2ODggTCAyOTYuMjAzMTI1IDYwNC42MzY3MTkgQyAzMjkuNzIyNjU2IDYyMi45Mjk2ODggMzY3LjQ1MzEyNSA2MzIuNTQ2ODc1IDQwNS44NDM3NSA2MzIuNTcwMzEyIEwgNDA1LjkzNzUgNjMyLjU3MDMxMiBDIDUzMi4zODI4MTIgNjMyLjU3MDMxMiA2MzUuMzM5ODQ0IDUyOS42MzY3MTkgNjM1LjM1OTM3NSA0MDMuMTQ0NTMxIEMgNjM1LjM1OTM3NSAzNDEuODM1OTM4IDYxMS41NTA3ODEgMjg0LjIxMDkzOCA1NjguMjEwOTM4IDI0MC44MjQyMTkgWiBNIDQwNS45Mzc1IDU5My44MzIwMzEgTCA0MDUuODY3'+
			'MTg4IDU5My44MzIwMzEgQyAzNzEuNjY0MDYyIDU5My44MzIwMzEgMzM4LjA3ODEyNSA1ODQuNjI4OTA2IDMwOC43OTY4NzUgNTY3LjI1MzkwNiBMIDMwMS44MzU5MzggNTYzLjEwOTM3NSBMIDIyOS42NDg0MzggNTgyLjA0Mjk2OSBMIDI0OC45MDYyNSA1MTEuNjY0MDYyIEwgMjQ0LjM3MTA5NCA1MDQuNDUzMTI1IEMgMjI1LjI3NzM0NCA0NzQuMDkzNzUgMjE1LjIwMzEyNSA0MzguOTk2MDk0IDIxNS4yMjY1NjIgNDAyLjk2MDkzOCBDIDIxNS4yNzM0MzggMjk3LjgzMjAzMSAzMDAuODI4MTI1IDIxMi4yNzM0MzggNDA2LjAwMzkwNiAyMTIuMjczNDM4IEMgNDU2Ljk0NTMxMiAyMTIuMjczNDM4ID'+
			'UwNC44MTY0MDYgMjMyLjE0ODQzOCA1NDAuODMyMDMxIDI2OC4yMDcwMzEgQyA1NzYuODQzNzUgMzA0LjI0MjE4OCA1OTYuNjQ4NDM4IDM1Mi4xNjAxNTYgNTk2LjYyNSA0MDMuMTIxMDk0IEMgNTk2LjU3ODEyNSA1MDguMjc3MzQ0IDUxMS4wMjM0MzggNTkzLjgzMjAzMSA0MDUuOTE0MDYyIDU5My44MzIwMzEgWiBNIDUxMC41NDI5NjkgNDUxLjAxNTYyNSBDIDUwNC44MTY0MDYgNDQ4LjE1NjI1IDQ3Ni42MzI4MTIgNDM0LjI4MTI1IDQ3MS4zNjcxODggNDMyLjM4MjgxMiBDIDQ2Ni4xMDE1NjIgNDMwLjQ1NzAzMSA0NjIuMzAwNzgxIDQyOS41MTk1MzEgNDU4LjQ4MDQ2OSA0MzUuMjQyMTg4IEMg'+
			'NDU0LjY1NjI1IDQ0MC45ODgyODEgNDQzLjY2Nzk2OSA0NTMuOTAyMzQ0IDQ0MC4zMjQyMTkgNDU3LjcyNjU2MiBDIDQzNi45ODA0NjkgNDYxLjU1MDc4MSA0MzMuNjQwNjI1IDQ2Mi4wMzEyNSA0MjcuODkwNjI1IDQ1OS4xNDQ1MzEgQyA0MjIuMTY3OTY5IDQ1Ni4yODUxNTYgNDAzLjY5MTQwNiA0NTAuMjE0ODQ0IDM4MS43ODEyNSA0MzAuNjg3NSBDIDM2NC43NSA0MTUuNDg0Mzc1IDM1My4yMzQzNzUgMzk2LjcxMDkzOCAzNDkuODkwNjI1IDM5MC45NjQ4NDQgQyAzNDYuNTQ2ODc1IDM4NS4yMTg3NSAzNDkuNTQ2ODc1IDM4Mi4xMjg5MDYgMzUyLjQxMDE1NiAzNzkuMjY1NjI1IEMgMzU0Ljk3Mj'+
			'Y1NiAzNzYuNzAzMTI1IDM1OC4xMzI4MTIgMzcyLjU1ODU5NCAzNjEuMDE5NTMxIDM2OS4yMTQ4NDQgQyAzNjMuODc4OTA2IDM2NS44NzUgMzY0LjgzOTg0NCAzNjMuNDY4NzUgMzY2Ljc0MjE4OCAzNTkuNjQ0NTMxIEMgMzY4LjY2NDA2MiAzNTUuODI0MjE5IDM2Ny43MDMxMjUgMzUyLjQ4MDQ2OSAzNjYuMjYxNzE5IDM0OS41OTM3NSBDIDM2NC44MjAzMTIgMzQ2LjczNDM3NSAzNTMuMzcxMDk0IDMxOC41MDM5MDYgMzQ4LjU4NTkzOCAzMDcuMDM1MTU2IEMgMzQzLjkzNzUgMjk1Ljg2MzI4MSAzMzkuMTk5MjE5IDI5Ny4zNzUgMzM1LjY5NTMxMiAyOTcuMTkxNDA2IEMgMzMyLjM1NTQ2OSAyOTcu'+
			'MDMxMjUgMzI4LjUzMTI1IDI5Ni45ODQzNzUgMzI0LjcwNzAzMSAyOTYuOTg0Mzc1IEMgMzIwLjg4MjgxMiAyOTYuOTg0Mzc1IDMxNC42Nzk2ODggMjk4LjQwMjM0NCAzMDkuNDE0MDYyIDMwNC4xNDg0MzggQyAzMDQuMTQ4NDM4IDMwOS44OTg0MzggMjg5LjM1OTM3NSAzMjMuNzY5NTMxIDI4OS4zNTkzNzUgMzUxLjk3NjU2MiBDIDI4OS4zNTkzNzUgMzgwLjE4MzU5NCAzMDkuODk0NTMxIDQwNy40NDkyMTkgMzEyLjc4MTI1IDQxMS4yOTY4NzUgQyAzMTUuNjQwNjI1IDQxNS4xMjEwOTQgMzUzLjIxMDkzOCA0NzMuMDE5NTMxIDQxMC43MjI2NTYgNDk3Ljg1OTM3NSBDIDQyNC4zOTA2MjUgNTAzLj'+
			'c2NTYyNSA0MzUuMDgyMDMxIDUwNy4yOTI5NjkgNDQzLjQxNDA2MiA1MDkuOTQ5MjE5IEMgNDU3LjE1MjM0NCA1MTQuMzIwMzEyIDQ2OS42NTIzNDQgNTEzLjcwMzEyNSA0NzkuNTE5NTMxIDUxMi4yMTQ4NDQgQyA0OTAuNTMxMjUgNTEwLjU2NjQwNiA1MTMuNDI1NzgxIDQ5OC4zMzk4NDQgNTE4LjIxMDkzOCA0ODQuOTQ1MzEyIEMgNTIyLjk5NjA5NCA0NzEuNTU0Njg4IDUyMi45OTYwOTQgNDYwLjA4MjAzMSA1MjEuNTU0Njg4IDQ1Ny42Nzk2ODggQyA1MjAuMTA5Mzc1IDQ1NS4yNzczNDQgNTE2LjI4OTA2MiA0NTMuODU1NDY5IDUxMC41NjI1IDQ1MC45NzI2NTYgWiBNIDUxMC41NDI5NjkgNDUx'+
			'LjAxNTYyNSAiIGZpbGw9IiNmZmZmZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_wpp__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_wpp__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjEwOTBhOTI3MWEiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNi4xNjAxNTYgNi4xNjAxNTYgTCA4MDMuODM5ODQ0IDYuMTYwMTU2IEwgODAzLjgzOTg0NCA4MD'+
			'MuODM5ODQ0IEwgNi4xNjAxNTYgODAzLjgzOTg0NCBaIE0gNi4xNjAxNTYgNi4xNjAxNTYgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjJjMDkwOThhMmIiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDYuMTYwMTU2IEMgMTg0LjcyNjU2MiA2LjE2MDE1NiA2LjE2MDE1NiAxODQuNzI2NTYyIDYuMTYwMTU2IDQwNSBDIDYuMTYwMTU2IDYyNS4yNzM0MzggMTg0LjcyNjU2MiA4MDMuODM5ODQ0IDQwNSA4MDMuODM5ODQ0IEMgNjI1LjI3MzQzOCA4MDMuODM5ODQ0IDgwMy44Mzk4NDQgNjI1LjI3MzQzOCA4MDMuODM5ODQ0IDQwNSBDIDgwMy44Mzk4NDQgMTg0'+
			'LjcyNjU2MiA2MjUuMjczNDM4IDYuMTYwMTU2IDQwNSA2LjE2MDE1NiBaIE0gNDA1IDYuMTYwMTU2ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIwZWU4M2JhZjQ1Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMTYwMTU2IDAuMTYwMTU2IEwgNzk3LjgzOTg0NCAwLjE2MDE1NiBMIDc5Ny44Mzk4NDQgNzk3LjgzOTg0NCBMIDAuMTYwMTU2IDc5Ny44Mzk4NDQgWiBNIDAuMTYwMTU2IDAuMTYwMTU2ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0OTA4NTQyYTc0Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM5OSAwLjE2MD'+
			'E1NiBDIDE3OC43MjY1NjIgMC4xNjAxNTYgMC4xNjAxNTYgMTc4LjcyNjU2MiAwLjE2MDE1NiAzOTkgQyAwLjE2MDE1NiA2MTkuMjczNDM4IDE3OC43MjY1NjIgNzk3LjgzOTg0NCAzOTkgNzk3LjgzOTg0NCBDIDYxOS4yNzM0MzggNzk3LjgzOTg0NCA3OTcuODM5ODQ0IDYxOS4yNzM0MzggNzk3LjgzOTg0NCAzOTkgQyA3OTcuODM5ODQ0IDE3OC43MjY1NjIgNjE5LjI3MzQzOCAwLjE2MDE1NiAzOTkgMC4xNjAxNTYgWiBNIDM5OSAwLjE2MDE1NiAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZGI3M2M3Mjc0ZCI+CiAgIDxyZWN0IHdpZHRoPSI3OTgiIHg9IjAiIHk9IjAiIGhlaWdo'+
			'dD0iNzk4Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjY2ZmI5ZWIxNGMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMTU4LjU3ODEyNSAxNTcuMjI2NTYyIEwgNjUxLjMyODEyNSAxNTcuMjI2NTYyIEwgNjUxLjMyODEyNSA2NTIuOTc2NTYyIEwgMTU4LjU3ODEyNSA2NTIuOTc2NTYyIFogTSAxNTguNTc4MTI1IDE1Ny4yMjY1NjIgIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCMxMDkwYTkyNzFhKSI+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoIzJjMDkwOThhMmIpIj4KICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMS'+
			'wgNiwgNikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2RiNzNjNzI3NGQpIj4KICAgICA8ZyBjbGlwLXBhdGg9InVybCgjMGVlODNiYWY0NSkiPgogICAgICA8ZyBjbGlwLXBhdGg9InVybCgjNDkwODU0MmE3NCkiPgogICAgICAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMTYwMTU2IDAuMTYwMTU2IEwgNzk3LjgzOTg0NCAwLjE2MDE1NiBMIDc5Ny44Mzk4NDQgNzk3LjgzOTg0NCBMIDAuMTYwMTU2IDc5Ny44Mzk4NDQgWiBNIDAuMTYwMTU2IDAuMTYwMTU2ICIgZmlsbD0iIzI3MjcyNyIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAg'+
			'PC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzY2ZmI5ZWIxNGMpIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTSA1NzkuNTYyNSAyMjkuNDI5Njg4IEMgNTMzLjI0MjE4OCAxODMuMDU4NTk0IDQ3MS42NDA2MjUgMTU3LjQ3MjY1NiA0MDYuMDAzOTA2IDE1Ny40NzI2NTYgQyAyNzAuNzU3ODEyIDE1Ny40NzI2NTYgMTYwLjY4MzU5NCAyNjcuNTIzNDM4IDE2MC42MzI4MTIgNDAyLjgxNjQwNiBDIDE2MC42MzI4MTIgNDQ2LjA1NDY4OCAxNzEuOTIxODc1IDQ4OC4yODkwNjIgMTkzLjM5NDUzMSA1MjUuNDc2NTYyIEwgMT'+
			'U4LjU3ODEyNSA2NTIuNjE3MTg4IEwgMjg4LjY1NjI1IDYxOC40ODgyODEgQyAzMjQuNSA2MzguMDUwNzgxIDM2NC44NDc2NTYgNjQ4LjMzMjAzMSA0MDUuOTA2MjUgNjQ4LjM1NTQ2OSBMIDQwNi4wMDM5MDYgNjQ4LjM1NTQ2OSBDIDU0MS4yMjI2NTYgNjQ4LjM1NTQ2OSA2NTEuMzI0MjE5IDUzOC4yODEyNSA2NTEuMzQ3NjU2IDQwMy4wMTE3MTkgQyA2NTEuMzQ3NjU2IDMzNy40NDUzMTIgNjI1Ljg4NjcxOSAyNzUuODI0MjE5IDU3OS41MzkwNjIgMjI5LjQyOTY4OCBaIE0gNDA2LjAwMzkwNiA2MDYuOTMzNTk0IEwgNDA1LjkyOTY4OCA2MDYuOTMzNTk0IEMgMzY5LjM1MTU2MiA2MDYuOTMzNTk0'+
			'IDMzMy40Mzc1IDU5Ny4wODk4NDQgMzAyLjEyMTA5NCA1NzguNTA3ODEyIEwgMjk0LjY3OTY4OCA1NzQuMDc0MjE5IEwgMjE3LjQ4NDM3NSA1OTQuMzI0MjE5IEwgMjM4LjA3NDIxOSA1MTkuMDYyNSBMIDIzMy4yMjY1NjIgNTExLjM1MTU2MiBDIDIxMi44MDg1OTQgNDc4Ljg4NjcxOSAyMDIuMDM1MTU2IDQ0MS4zNTE1NjIgMjAyLjA1ODU5NCA0MDIuODE2NDA2IEMgMjAyLjEwOTM3NSAyOTAuMzkwNjI1IDI5My42MDE1NjIgMTk4Ljg5ODQzOCA0MDYuMDc4MTI1IDE5OC44OTg0MzggQyA0NjAuNTUwNzgxIDE5OC44OTg0MzggNTExLjc0NjA5NCAyMjAuMTQ4NDM4IDU1MC4yNTc4MTIgMjU4LjcxMD'+
			'kzOCBDIDU4OC43Njk1MzEgMjk3LjI0NjA5NCA2MDkuOTQ1MzEyIDM0OC40ODgyODEgNjA5LjkyMTg3NSA0MDIuOTg4MjgxIEMgNjA5Ljg3NSA1MTUuNDM3NSA1MTguMzc4OTA2IDYwNi45MzM1OTQgNDA1Ljk4MDQ2OSA2MDYuOTMzNTk0IFogTSA1MTcuODY3MTg4IDQ1NC4yMDcwMzEgQyA1MTEuNzQ2MDk0IDQ1MS4xNDQ1MzEgNDgxLjYwNTQ2OSA0MzYuMzA4NTk0IDQ3NS45NzY1NjIgNDM0LjI3NzM0NCBDIDQ3MC4zNDM3NSA0MzIuMjIyNjU2IDQ2Ni4yODEyNSA0MzEuMjE4NzUgNDYyLjE5MTQwNiA0MzcuMzM5ODQ0IEMgNDU4LjEwMTU2MiA0NDMuNDg0Mzc1IDQ0Ni4zNTE1NjIgNDU3LjI5Mjk2'+
			'OSA0NDIuNzc3MzQ0IDQ2MS4zNzg5MDYgQyA0MzkuMjAzMTI1IDQ2NS40Njg3NSA0MzUuNjI4OTA2IDQ2NS45ODQzNzUgNDI5LjQ4NDM3NSA0NjIuODk4NDM4IEMgNDIzLjM2MzI4MSA0NTkuODM1OTM4IDQwMy42MDU0NjkgNDUzLjM1MTU2MiAzODAuMTc1NzgxIDQzMi40NjQ4NDQgQyAzNjEuOTU3MDMxIDQxNi4yMTA5MzggMzQ5LjY0NDUzMSAzOTYuMTMyODEyIDM0Ni4wNzAzMTIgMzg5Ljk4ODI4MSBDIDM0Mi40OTYwOTQgMzgzLjg0Mzc1IDM0NS43MDMxMjUgMzgwLjUzOTA2MiAzNDguNzYxNzE5IDM3Ny40NzY1NjIgQyAzNTEuNTAzOTA2IDM3NC43MzQzNzUgMzU0Ljg4MjgxMiAzNzAuMzA0Nj'+
			'g4IDM1Ny45Njg3NSAzNjYuNzMwNDY5IEMgMzYxLjAyNzM0NCAzNjMuMTU2MjUgMzYyLjA1NDY4OCAzNjAuNTgyMDMxIDM2NC4wODk4NDQgMzU2LjQ5NjA5NCBDIDM2Ni4xNDQ1MzEgMzUyLjQwNjI1IDM2NS4xMTcxODggMzQ4LjgzMjAzMSAzNjMuNTc0MjE5IDM0NS43NDYwOTQgQyAzNjIuMDMxMjUgMzQyLjY4NzUgMzQ5Ljc4OTA2MiAzMTIuNSAzNDQuNjcxODc1IDMwMC4yMzQzNzUgQyAzMzkuNzAzMTI1IDI4OC4yODUxNTYgMzM0LjYzNjcxOSAyODkuOTAyMzQ0IDMzMC44OTA2MjUgMjg5LjcwNzAzMSBDIDMyNy4zMTY0MDYgMjg5LjUzNTE1NiAzMjMuMjI2NTYyIDI4OS40ODQzNzUgMzE5LjEz'+
			'NjcxOSAyODkuNDg0Mzc1IEMgMzE1LjA1MDc4MSAyODkuNDg0Mzc1IDMwOC40MTQwNjIgMjkxLjAwMzkwNiAzMDIuNzgxMjUgMjk3LjE0ODQzOCBDIDI5Ny4xNTIzNDQgMzAzLjI5Mjk2OSAyODEuMzM1OTM4IDMxOC4xMjg5MDYgMjgxLjMzNTkzOCAzNDguMjkyOTY5IEMgMjgxLjMzNTkzOCAzNzguNDU3MDMxIDMwMy4yOTY4NzUgNDA3LjYxNzE4OCAzMDYuMzgyODEyIDQxMS43MzA0NjkgQyAzMDkuNDQxNDA2IDQxNS44MTY0MDYgMzQ5LjYxNzE4OCA0NzcuNzM0Mzc1IDQxMS4xMjEwOTQgNTA0LjMwMDc4MSBDIDQyNS43MzgyODEgNTEwLjYxNzE4OCA0MzcuMTcxODc1IDUxNC4zODY3MTkgNDQ2Lj'+
			'A4MjAzMSA1MTcuMjI2NTYyIEMgNDYwLjc3MzQzOCA1MjEuOTAyMzQ0IDQ3NC4xNDA2MjUgNTIxLjI0MjE4OCA0ODQuNjkxNDA2IDUxOS42NDg0MzggQyA0OTYuNDY4NzUgNTE3Ljg4NjcxOSA1MjAuOTUzMTI1IDUwNC44MTI1IDUyNi4wNjY0MDYgNDkwLjQ5MjE4OCBDIDUzMS4xODM1OTQgNDc2LjE2Nzk2OSA1MzEuMTgzNTk0IDQ2My45MDIzNDQgNTI5LjY0NDUzMSA0NjEuMzMyMDMxIEMgNTI4LjEwMTU2MiA0NTguNzYxNzE5IDUyNC4wMTE3MTkgNDU3LjI0MjE4OCA1MTcuODkwNjI1IDQ1NC4xNTYyNSBaIE0gNTE3Ljg2NzE4OCA0NTQuMjA3MDMxICIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8'+
			'L3N2Zz4K';
		me._button_wpp__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_wpp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_wpp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_wpp.onclick=function (e) {
			player.openUrl("https:\/\/wa.me\/5531999999999","_blank");
		}
		me._button_wpp.onmouseenter=function (e) {
			me._button_wpp__img.style.visibility='hidden';
			me._button_wpp__imgo.style.visibility='inherit';
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_wpp']=true;
		}
		me._button_wpp.onmouseleave=function (e) {
			me._button_wpp__img.style.visibility='inherit';
			me._button_wpp__imgo.style.visibility='hidden';
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_wpp']=false;
		}
		me._button_wpp.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_wpp);
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjEyMmQxYjViYmMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDYuNDE0MDYyIDQ2LjQxNDA2MiBMIDc2My41ODU5MzggNDYuNDE0MDYyIEwgNzYzLjU4NTkzOC'+
			'A3NjMuNTg1OTM4IEwgNDYuNDE0MDYyIDc2My41ODU5MzggWiBNIDQ2LjQxNDA2MiA0Ni40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjFiOGM1OTVkN2YiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDQ2LjQxNDA2MiBDIDIwNi45NTcwMzEgNDYuNDE0MDYyIDQ2LjQxNDA2MiAyMDYuOTU3MDMxIDQ2LjQxNDA2MiA0MDUgQyA0Ni40MTQwNjIgNjAzLjA0Mjk2OSAyMDYuOTU3MDMxIDc2My41ODU5MzggNDA1IDc2My41ODU5MzggQyA2MDMuMDQyOTY5IDc2My41ODU5MzggNzYzLjU4NTkzOCA2MDMuMDQyOTY5IDc2My41ODU5MzggNDA1IEMgNzYz'+
			'LjU4NTkzOCAyMDYuOTU3MDMxIDYwMy4wNDI5NjkgNDYuNDE0MDYyIDQwNSA0Ni40MTQwNjIgWiBNIDQwNSA0Ni40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjQyODdlZWU4NmUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC40MTQwNjIgMC40MTQwNjIgTCA3MTcuNTg1OTM4IDAuNDE0MDYyIEwgNzE3LjU4NTkzOCA3MTcuNTg1OTM4IEwgMC40MTQwNjIgNzE3LjU4NTkzOCBaIE0gMC40MTQwNjIgMC40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjA1MWM3YWU3NTYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIG'+
			'Q9Ik0gMzU5IDAuNDE0MDYyIEMgMTYwLjk1NzAzMSAwLjQxNDA2MiAwLjQxNDA2MiAxNjAuOTU3MDMxIDAuNDE0MDYyIDM1OSBDIDAuNDE0MDYyIDU1Ny4wNDI5NjkgMTYwLjk1NzAzMSA3MTcuNTg1OTM4IDM1OSA3MTcuNTg1OTM4IEMgNTU3LjA0Mjk2OSA3MTcuNTg1OTM4IDcxNy41ODU5MzggNTU3LjA0Mjk2OSA3MTcuNTg1OTM4IDM1OSBDIDcxNy41ODU5MzggMTYwLjk1NzAzMSA1NTcuMDQyOTY5IDAuNDE0MDYyIDM1OSAwLjQxNDA2MiBaIE0gMzU5IDAuNDE0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIzNjgxNGRjZGExIj4KICAgPHJlY3Qgd2lkdGg9IjcxOCIgeD0i'+
			'MCIgeT0iMCIgaGVpZ2h0PSI3MTgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iM2I2YTVkY2QyMyI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxNzQuMzc1IDE3NC4zNzUgTCA2MzUuNjI1IDE3NC4zNzUgTCA2MzUuNjI1IDYzNS42MjUgTCAxNzQuMzc1IDYzNS42MjUgWiBNIDE3NC4zNzUgMTc0LjM3NSAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzEyMmQxYjViYmMpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjMWI4YzU5NWQ3ZikiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0NiwgNDYpIj4KICAgID'+
			'xnIGNsaXAtcGF0aD0idXJsKCMzNjgxNGRjZGExKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzQyODdlZWU4NmUpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzA1MWM3YWU3NTYpIj4KICAgICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjQxNDA2MiAwLjQxNDA2MiBMIDcxNy41ODU5MzggMC40MTQwNjIgTCA3MTcuNTg1OTM4IDcxNy41ODU5MzggTCAwLjQxNDA2MiA3MTcuNTg1OTM4IFogTSAwLjQxNDA2MiAwLjQxNDA2MiAiIGZpbGw9IiMyNzI3MjciLz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgog'+
			'IDwvZz4KIDwvZz4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDQwNSAyODIuNTU4NTk0IEMgMzM3LjQ4NDM3NSAyODIuNTU4NTk0IDI4Mi41NTA3ODEgMzM3LjQ3MjY1NiAyODIuNTUwNzgxIDQwNC45ODgyODEgQyAyODIuNTUwNzgxIDQ3Mi41MDc4MTIgMzM3LjQ4NDM3NSA1MjcuNDM3NSA0MDUgNTI3LjQzNzUgQyA0NzIuNTE5NTMxIDUyNy40Mzc1IDUyNy40NDkyMTkgNDcyLjUwNzgxMiA1MjcuNDQ5MjE5IDQwNC45ODgyODEgQyA1MjcuNDQ5MjE5IDMzNy40NzI2NTYgNDcyLjUxOTUzMSAyODIuNTU4NTk0IDQwNSAyODIuNTU4NTk0IFogTSA0MDUgND'+
			'g0LjIzMDQ2OSBDIDM2MS4zMjAzMTIgNDg0LjIzMDQ2OSAzMjUuNzgxMjUgNDQ4LjY3NTc4MSAzMjUuNzgxMjUgNDA0Ljk4ODI4MSBDIDMyNS43ODEyNSAzNjEuMzAwNzgxIDM2MS4zMjAzMTIgMzI1Ljc2OTUzMSA0MDUgMzI1Ljc2OTUzMSBDIDQ0OC42ODM1OTQgMzI1Ljc2OTUzMSA0ODQuMjIyNjU2IDM2MS4zMDA3ODEgNDg0LjIyMjY1NiA0MDQuOTg4MjgxIEMgNDg0LjIyMjY1NiA0NDguNjc1NzgxIDQ0OC42ODM1OTQgNDg0LjIzMDQ2OSA0MDUgNDg0LjIzMDQ2OSBaIE0gNDA1IDQ4NC4yMzA0NjkgIiBmaWxsPSIjZmZmZmZmIi8+CiA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0i'+
			'bm9uemVybyIgZD0iTSA1MzIuMDUwNzgxIDI1My4xODM1OTQgQyA1MTguMzgyODEyIDI1My4xODM1OTQgNTA3LjMwNDY4OCAyNjQuMjczNDM4IDUwNy4zMDQ2ODggMjc3LjkzNzUgQyA1MDcuMzA0Njg4IDI5MS42MTcxODggNTE4LjM4MjgxMiAzMDIuNjg3NSA1MzIuMDUwNzgxIDMwMi42ODc1IEMgNTQ1LjcxNDg0NCAzMDIuNjg3NSA1NTYuNzk2ODc1IDI5MS42MTcxODggNTU2Ljc5Njg3NSAyNzcuOTM3NSBDIDU1Ni43OTY4NzUgMjY0LjI3MzQzOCA1NDUuNzE0ODQ0IDI1My4xODM1OTQgNTMyLjA1MDc4MSAyNTMuMTgzNTk0IFogTSA1MzIuMDUwNzgxIDI1My4xODM1OTQgIiBmaWxsPSIjZmZmZm'+
			'ZmIi8+CiA8ZyBjbGlwLXBhdGg9InVybCgjM2I2YTVkY2QyMykiPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDUyNS43OTY4NzUgMTc0LjM4NjcxOSBMIDI4NC4yMDMxMjUgMTc0LjM4NjcxOSBDIDIyMy42NDQ1MzEgMTc0LjM4NjcxOSAxNzQuMzc1IDIyMy42MzY3MTkgMTc0LjM3NSAyODQuMTkxNDA2IEwgMTc0LjM3NSA1MjUuNzg5MDYyIEMgMTc0LjM3NSA1ODYuMzM5ODQ0IDIyMy42NDQ1MzEgNjM1LjYxMzI4MSAyODQuMjAzMTI1IDYzNS42MTMyODEgTCA1MjUuNzk2ODc1IDYzNS42MTMyODEgQyA1ODYuMzUxNTYyIDYzNS42MTMyODEgNjM1LjYy'+
			'NSA1ODYuMzM5ODQ0IDYzNS42MjUgNTI1Ljc4OTA2MiBMIDYzNS42MjUgMjg0LjE5MTQwNiBDIDYzNS42MjUgMjIzLjYzNjcxOSA1ODYuMzUxNTYyIDE3NC4zODY3MTkgNTI1Ljc5Njg3NSAxNzQuMzg2NzE5IFogTSA1OTIuMzk4NDM4IDUyNS43ODkwNjIgQyA1OTIuMzk4NDM4IDU2Mi41MTE3MTkgNTYyLjUxOTUzMSA1OTIuNDAyMzQ0IDUyNS43OTY4NzUgNTkyLjQwMjM0NCBMIDI4NC4yMDMxMjUgNTkyLjQwMjM0NCBDIDI0Ny40ODA0NjkgNTkyLjQwMjM0NCAyMTcuNjAxNTYyIDU2Mi41MTE3MTkgMjE3LjYwMTU2MiA1MjUuNzg5MDYyIEwgMjE3LjYwMTU2MiAyODQuMTkxNDA2IEMgMjE3LjYwMT'+
			'U2MiAyNDcuNDY4NzUgMjQ3LjQ4MDQ2OSAyMTcuNTkzNzUgMjg0LjIwMzEyNSAyMTcuNTkzNzUgTCA1MjUuNzk2ODc1IDIxNy41OTM3NSBDIDU2Mi41MTk1MzEgMjE3LjU5Mzc1IDU5Mi4zOTg0MzggMjQ3LjQ2ODc1IDU5Mi4zOTg0MzggMjg0LjE5MTQwNiBaIE0gNTkyLjM5ODQzOCA1MjUuNzg5MDYyICIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjQxMmQ2MDk1OTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC40Mjk2ODggMC40Mjk2ODggTCA3NzcuNTcwMzEyIDAuNDI5Njg4IEwgNzc3LjU3MDMxMiA3Nz'+
			'cuNTcwMzEyIEwgMC40Mjk2ODggNzc3LjU3MDMxMiBaIE0gMC40Mjk2ODggMC40Mjk2ODggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImI4NTgxNjdiYTUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzg5IDAuNDI5Njg4IEMgMTc0LjM5ODQzOCAwLjQyOTY4OCAwLjQyOTY4OCAxNzQuMzk4NDM4IDAuNDI5Njg4IDM4OSBDIDAuNDI5Njg4IDYwMy42MDE1NjIgMTc0LjM5ODQzOCA3NzcuNTcwMzEyIDM4OSA3NzcuNTcwMzEyIEMgNjAzLjYwMTU2MiA3NzcuNTcwMzEyIDc3Ny41NzAzMTIgNjAzLjYwMTU2MiA3NzcuNTcwMzEyIDM4OSBDIDc3Ny41NzAzMTIgMTc0'+
			'LjM5ODQzOCA2MDMuNjAxNTYyIDAuNDI5Njg4IDM4OSAwLjQyOTY4OCBaIE0gMzg5IDAuNDI5Njg4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0MjBmY2VlMDk4Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNDI5Njg4IDAuNDI5Njg4IEwgNzc3LjU3MDMxMiAwLjQyOTY4OCBMIDc3Ny41NzAzMTIgNzc3LjU3MDMxMiBMIDAuNDI5Njg4IDc3Ny41NzAzMTIgWiBNIDAuNDI5Njg4IDAuNDI5Njg4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJkZThjMjYxY2MzIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM4OSAwLjQyOT'+
			'Y4OCBDIDE3NC4zOTg0MzggMC40Mjk2ODggMC40Mjk2ODggMTc0LjM5ODQzOCAwLjQyOTY4OCAzODkgQyAwLjQyOTY4OCA2MDMuNjAxNTYyIDE3NC4zOTg0MzggNzc3LjU3MDMxMiAzODkgNzc3LjU3MDMxMiBDIDYwMy42MDE1NjIgNzc3LjU3MDMxMiA3NzcuNTcwMzEyIDYwMy42MDE1NjIgNzc3LjU3MDMxMiAzODkgQyA3NzcuNTcwMzEyIDE3NC4zOTg0MzggNjAzLjYwMTU2MiAwLjQyOTY4OCAzODkgMC40Mjk2ODggWiBNIDM4OSAwLjQyOTY4OCAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iOTNkYWY3NzU2YSI+CiAgIDxyZWN0IHdpZHRoPSI3NzgiIHg9IjAiIHk9IjAiIGhlaWdo'+
			'dD0iNzc4Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjEzZTY3NjQyOWMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMTM5LjA4OTg0NCAxMzkuMDg5ODQ0IEwgNjM4LjkxMDE1NiAxMzkuMDg5ODQ0IEwgNjM4LjkxMDE1NiA2MzguOTEwMTU2IEwgMTM5LjA4OTg0NCA2MzguOTEwMTU2IFogTSAxMzkuMDg5ODQ0IDEzOS4wODk4NDQgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImU0YzA3NzIwMWIiPgogICA8cmVjdCB3aWR0aD0iNzc4IiB4PSIwIiB5PSIwIiBoZWlnaHQ9Ijc3OCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyB0cmFuc2Zvcm'+
			'09Im1hdHJpeCgxLCAwLCAwLCAxLCAxNiwgMTYpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZTRjMDc3MjAxYikiPgogICA8ZyBjbGlwLXBhdGg9InVybCgjNDEyZDYwOTU5NCkiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2I4NTgxNjdiYTUpIj4KICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwLjAwMDAwMDAwMDAwMDAzOTA4KSI+CiAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCM5M2RhZjc3NTZhKSI+CiAgICAgICA8ZyBjbGlwLXBhdGg9InVybCgjNDIwZmNlZTA5OCkiPgogICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNkZThjMjYxY2MzKSI+CiAgICAgICAgIDxwYXRo'+
			'IGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjQyOTY4OCAwLjQyOTY4OCBMIDc3Ny41NzAzMTIgMC40Mjk2ODggTCA3NzcuNTcwMzEyIDc3Ny41NzAzMTIgTCAwLjQyOTY4OCA3NzcuNTcwMzEyIFogTSAwLjQyOTY4OCAwLjQyOTY4OCAiIGZpbGw9IiMyNzI3MjciLz4KICAgICAgICA8L2c+CiAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICA8L2c+CiAgICA8L2c+CiAgIDwvZz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzg5IDI1Ni4zMjAzMTIgQyAzMTUuODM5ODQ0IDI1Ni4zMjAzMTIgMjU2LjMxMj'+
			'UgMzE1LjgyNDIxOSAyNTYuMzEyNSAzODguOTg4MjgxIEMgMjU2LjMxMjUgNDYyLjE1MjM0NCAzMTUuODM5ODQ0IDUyMS42NzU3ODEgMzg5IDUyMS42NzU3ODEgQyA0NjIuMTY0MDYyIDUyMS42NzU3ODEgNTIxLjY5MTQwNiA0NjIuMTUyMzQ0IDUyMS42OTE0MDYgMzg4Ljk4ODI4MSBDIDUyMS42OTE0MDYgMzE1LjgyNDIxOSA0NjIuMTY0MDYyIDI1Ni4zMjAzMTIgMzg5IDI1Ni4zMjAzMTIgWiBNIDM4OSA0NzQuODU1NDY5IEMgMzQxLjY2NDA2MiA0NzQuODU1NDY5IDMwMy4xNTYyNSA0MzYuMzI4MTI1IDMwMy4xNTYyNSAzODguOTg4MjgxIEMgMzAzLjE1NjI1IDM0MS42NDg0MzggMzQxLjY2NDA2'+
			'MiAzMDMuMTQwNjI1IDM4OSAzMDMuMTQwNjI1IEMgNDM2LjMzNTkzOCAzMDMuMTQwNjI1IDQ3NC44NDc2NTYgMzQxLjY0ODQzOCA0NzQuODQ3NjU2IDM4OC45ODgyODEgQyA0NzQuODQ3NjU2IDQzNi4zMjgxMjUgNDM2LjMzNTkzOCA0NzQuODU1NDY5IDM4OSA0NzQuODU1NDY5IFogTSAzODkgNDc0Ljg1NTQ2OSAiIGZpbGw9IiNmZmZmZmYiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNTI2LjY3NTc4MSAyMjQuNDkyMTg4IEMgNTExLjg2NzE4OCAyMjQuNDkyMTg4IDQ5OS44NTkzNzUgMjM2LjUwNzgxMiA0OTkuODU5Mzc1IDI1MS4zMTI1IEMgND'+
			'k5Ljg1OTM3NSAyNjYuMTMyODEyIDUxMS44NjcxODggMjc4LjEzMjgxMiA1MjYuNjc1NzgxIDI3OC4xMzI4MTIgQyA1NDEuNDg0Mzc1IDI3OC4xMzI4MTIgNTUzLjQ4ODI4MSAyNjYuMTMyODEyIDU1My40ODgyODEgMjUxLjMxMjUgQyA1NTMuNDg4MjgxIDIzNi41MDc4MTIgNTQxLjQ4NDM3NSAyMjQuNDkyMTg4IDUyNi42NzU3ODEgMjI0LjQ5MjE4OCBaIE0gNTI2LjY3NTc4MSAyMjQuNDkyMTg4ICIgZmlsbD0iI2ZmZmZmZiIvPgogICA8ZyBjbGlwLXBhdGg9InVybCgjMTNlNjc2NDI5YykiPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNTE5Ljg5'+
			'NDUzMSAxMzkuMTAxNTYyIEwgMjU4LjEwMTU2MiAxMzkuMTAxNTYyIEMgMTkyLjQ4MDQ2OSAxMzkuMTAxNTYyIDEzOS4wODk4NDQgMTkyLjQ3MjY1NiAxMzkuMDg5ODQ0IDI1OC4wODk4NDQgTCAxMzkuMDg5ODQ0IDUxOS44ODY3MTkgQyAxMzkuMDg5ODQ0IDU4NS41MDM5MDYgMTkyLjQ4MDQ2OSA2MzguODk0NTMxIDI1OC4xMDE1NjIgNjM4Ljg5NDUzMSBMIDUxOS44OTQ1MzEgNjM4Ljg5NDUzMSBDIDU4NS41MTk1MzEgNjM4Ljg5NDUzMSA2MzguOTEwMTU2IDU4NS41MDM5MDYgNjM4LjkxMDE1NiA1MTkuODg2NzE5IEwgNjM4LjkxMDE1NiAyNTguMDg5ODQ0IEMgNjM4LjkxMDE1NiAxOTIuNDcyNj'+
			'U2IDU4NS41MTk1MzEgMTM5LjEwMTU2MiA1MTkuODk0NTMxIDEzOS4xMDE1NjIgWiBNIDU5Mi4wNjY0MDYgNTE5Ljg4NjcxOSBDIDU5Mi4wNjY0MDYgNTU5LjY4MzU5NCA1NTkuNjkxNDA2IDU5Mi4wNzQyMTkgNTE5Ljg5NDUzMSA1OTIuMDc0MjE5IEwgMjU4LjEwMTU2MiA1OTIuMDc0MjE5IEMgMjE4LjMwODU5NCA1OTIuMDc0MjE5IDE4NS45Mjk2ODggNTU5LjY4MzU5NCAxODUuOTI5Njg4IDUxOS44ODY3MTkgTCAxODUuOTI5Njg4IDI1OC4wODk4NDQgQyAxODUuOTI5Njg4IDIxOC4yOTI5NjkgMjE4LjMwODU5NCAxODUuOTIxODc1IDI1OC4xMDE1NjIgMTg1LjkyMTg3NSBMIDUxOS44OTQ1MzEg'+
			'MTg1LjkyMTg3NSBDIDU1OS42OTE0MDYgMTg1LjkyMTg3NSA1OTIuMDY2NDA2IDIxOC4yOTI5NjkgNTkyLjA2NjQwNiAyNTguMDg5ODQ0IFogTSA1OTIuMDY2NDA2IDUxOS44ODY3MTkgIiBmaWxsPSIjZmZmZmZmIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/mtccultura?igsh=MXE3bnA3dnpzamI4eg==","_blank");
		}
		me._button_twitter.onmouseenter=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_twitter']=true;
		}
		me._button_twitter.onmouseleave=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_twitter']=false;
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsLW9wYWNpdHk9IjAuODYyNzQ1IiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjIgIEMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTguMywzNzcuNmgtMTBjLTEuMiwwLTIuNSwxLjYtMi41LDMuOHY2LjRoMTIuNXYxMi41aC0xMi41djMwLjFoLTEyLjV2LTMwLjFoLTEwdi0xMi41aDEwICB2LTYuM2MwLTksNi43LTE2LjMsMTUtMTYuM2gxMFYzNzcuNnoiIGZpbGw9IiMyNzI3MjciLz4KIDxwYXRoIGQ9Ik0tMTY4LjMsMzc3LjZoMTB2LTEyLjRoLTEwYy04LjMsMC0x'+
			'NSw3LjMtMTUsMTYuM3Y2LjNoLTEwdjEyLjVoMTB2MzAuMWgxMi41di0zMC4xaDEyLjV2LTEyLjVoLTEyLjV2LTYuNCAgQy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsLW9wYWNpdHk9IjAuODYyNzQ1IiBkPSJNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU2LjUsMzc1LjYgIGgtMTFjLTEuMywwLTIuOCwxLjgtMi44LDQuMXY3aDEzLjh2MTMuN2gtMTMuOHYzMy4yaC0xMy44di0zMy4yaC0xMXYtMTMuN2gxMXYtNi45YzAtOS45LDcuNC0xNy45LDE2LjUtMTcuOWgxMVYzNzUuNnoiIGZpbGw9IiMyNzI3MjciLz4KIDxwYXRoIGQ9Ik0tMTY3LjUsMzc1LjZoMTF2LTEzLjZoLTExYy05LjEsMC0xNi41LDgtMTYuNSwxNy45'+
			'djYuOWgtMTF2MTMuN2gxMXYzMy4yaDEzLjh2LTMzLjJoMTMuOHYtMTMuN2gtMTMuOHYtNyAgQy0xNzAuMywzNzcuMy0xNjguOCwzNzUuNi0xNjcuNSwzNzUuNnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 111px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			player.openUrl("https:\/\/web.facebook.com\/minas.mtc","_blank");
		}
		me._button_facebook.onmouseenter=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_facebook']=true;
		}
		me._button_facebook.onmouseleave=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_facebook']=false;
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_facebook);
		me.divSkin.appendChild(me._buttons_social);
		el=me._button_specifications=document.createElement('div');
		el.ggId="button_specifications";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 4px;';
		hs+='height : 473px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 375px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_specifications.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_specifications.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_specifications.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_specifications.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_specifications.style.transition='';
				if (me._button_specifications.ggCurrentLogicStateVisible == 0) {
					me._button_specifications.style.visibility="hidden";
					me._button_specifications.ggVisible=false;
				}
				else {
					me._button_specifications.style.visibility=(Number(me._button_specifications.style.opacity)>0||!me._button_specifications.style.opacity)?'inherit':'hidden';
					me._button_specifications.ggVisible=true;
				}
			}
		}
		me._button_specifications.logicBlock_visible();
		me._button_specifications.onclick=function (e) {
			me._background_specifications.ggVisible = !me._background_specifications.ggVisible;
			var flag=me._background_specifications.ggVisible;
			me._background_specifications.style.transition='none';
			me._background_specifications.style.visibility=((flag)&&(Number(me._background_specifications.style.opacity)>0||!me._background_specifications.style.opacity))?'inherit':'hidden';
		}
		me._button_specifications.onmouseenter=function (e) {
			me._tooltip_btn_specifications.style.transition='none';
			me._tooltip_btn_specifications.style.visibility=(Number(me._tooltip_btn_specifications.style.opacity)>0||!me._tooltip_btn_specifications.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_specifications.ggVisible=true;
			me.elementMouseOver['button_specifications']=true;
		}
		me._button_specifications.onmouseleave=function (e) {
			me._tooltip_btn_specifications.style.transition='none';
			me._tooltip_btn_specifications.style.visibility='hidden';
			me._tooltip_btn_specifications.ggVisible=false;
			me.elementMouseOver['button_specifications']=false;
		}
		me._button_specifications.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_image_specification=document.createElement('div');
		els=me._stop_image_specification__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB3aWR0aD0iMTA4MCIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHpvb21BbmRQYW49Im1hZ25pZnkiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImZiOTJiOGI1OTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZWQzOGU4N2M0YiI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjQ2NjI3NWIxMjQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iMjk3M2E2MjVjOSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI2MDhiZjg4NjFiIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgeD0iMCIgaGVpZ2h0PSI3MjQiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0'+
			'aCBpZD0iNzdmYWVjYThhYyI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjkuNTU0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDY4MC44MDQ2ODggTCAxMjkuNTU0Njg4IDY4MC44MDQ2ODggWiBNIDEyOS41NTQ2ODggMTI5LjU1NDY4OCAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2ZiOTJiOGI1OTQpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZWQzOGU4N2M0YikiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKC'+
			'M2MDhiZjg4NjFiKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzQ2NjI3NWIxMjQpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzI5NzNhNjI1YzkpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbD0iIzEzMjk1OSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1'+
			'cmwoIzc3ZmFlY2E4YWMpIj4KICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGwtb3BhY2l0eT0iMSIgZD0iTSA0NDEuNTM5MDYyIDMyMi45Mjk2ODggTCAzNDUuOTc2NTYyIDMzOC42Njc5NjkgTCAzMzguNjY3OTY5IDM2MC4wMjczNDQgTCAzNDYuNTM5MDYyIDM1OS40NjQ4NDQgQyAzNTYuNjU2MjUgMzU4LjkwNjI1IDM2Mi44Mzk4NDQgMzU4LjkwNjI1IDM2Ni4yMTA5MzggMzYyLjI3NzM0NCBDIDM2OS4wMjM0MzggMzY1LjA4OTg0NCAzNjkuNTg1OTM4IDM2Ny4zMzU5MzggMzY5LjU4NTkzOCAzNjguNDYwOTM4IEMgMzY5LjU4NTkzOCAzNzQuMDgyMDMxIDM2Ny44OTg0MzggMzgzLjA3ND'+
			'IxOSAzNjQuNTI3MzQ0IDM5NC44Nzg5MDYgTCAzMjYuODYzMjgxIDUyNC4xNzE4NzUgQyAzMjMuNDkyMTg4IDUzNC44NTE1NjIgMzIxLjgwNDY4OCA1NDMuODQzNzUgMzIxLjgwNDY4OCA1NTEuMTUyMzQ0IEMgMzIxLjgwNDY4OCA1NjIuOTU3MDMxIDMyNS43MzgyODEgNTcyLjUxNTYyNSAzMzQuMTcxODc1IDU4MC4zODI4MTIgQyAzNDIuMDM5MDYyIDU4Ny42OTE0MDYgMzUyLjcyMjY1NiA1OTEuNjI1IDM2NS42NDg0MzggNTkxLjYyNSBDIDM5OC4yNTM5MDYgNTkxLjYyNSA0MjkuMTcxODc1IDU2Ni44OTA2MjUgNDU3LjI3NzM0NCA1MTcuOTg4MjgxIEwgNDYwLjA4NTkzOCA1MTMuNDg4MjgxIEwg'+
			'NDQxLjUzOTA2MiA1MDIuODA4NTk0IEwgNDM4LjcyNjU2MiA1MDYuNzQ2MDk0IEMgNDI3LjQ4NDM3NSA1MjMuNjA5Mzc1IDQxOC40OTIxODggNTM1LjQxNDA2MiA0MTAuNjIxMDk0IDU0MS41OTc2NTYgQyA0MDguMzcxMDk0IDU0My4yODEyNSA0MDYuNjgzNTk0IDU0NC40MDYyNSA0MDUgNTQ0LjQwNjI1IEMgNDA1IDU0NC40MDYyNSA0MDQuNDM3NSA1NDQuNDA2MjUgNDAzLjg3NSA1NDMuMjgxMjUgQyA0MDIuNzUgNTQyLjE2MDE1NiA0MDIuNzUgNTQxLjU5NzY1NiA0MDIuNzUgNTQxLjU5NzY1NiBDIDQwMi43NSA1MzkuOTEwMTU2IDQwMy4zMTI1IDUzNS40MTQwNjIgNDA3LjI0NjA5NCA1MjEuMz'+
			'U5Mzc1IEwgNDY0LjU4NTkzOCAzMjIuMzY3MTg4IEwgNDQxLjUzOTA2MiAzMjIuMzY3MTg4IFogTSA0NzAuNzY5NTMxIDI4Ni45NTMxMjUgQyA0NzkuNzYxNzE5IDI3Ny45NTcwMzEgNDg0LjI1NzgxMiAyNjcuMjc3MzQ0IDQ4NC4yNTc4MTIgMjU0LjkxMDE1NiBDIDQ4NC4yNTc4MTIgMjQyLjU0Mjk2OSA0NzkuNzYxNzE5IDIzMS44NjMyODEgNDcxLjMzMjAzMSAyMjIuODcxMDk0IEMgNDYyLjg5ODQzOCAyMTMuODc1IDQ1MS42NTYyNSAyMDkuMzc4OTA2IDQzOS4yODkwNjIgMjA5LjM3ODkwNiBDIDQyNi45MjE4NzUgMjA5LjM3ODkwNiA0MTYuMjQyMTg4IDIxMy44NzUgNDA3LjI0NjA5NCAyMjIu'+
			'ODcxMDk0IEMgMzk4LjgxNjQwNiAyMzEuODYzMjgxIDM5NC4zMjAzMTIgMjQyLjU0Mjk2OSAzOTQuMzIwMzEyIDI1NC45MTAxNTYgQyAzOTQuMzIwMzEyIDI2Ny4yNzczNDQgMzk4LjgxNjQwNiAyNzcuOTU3MDMxIDQwNy44MDg1OTQgMjg2Ljk1MzEyNSBDIDQxNi44MDQ2ODggMjk1Ljk0NTMxMiA0MjcuNDg0Mzc1IDMwMC40NDE0MDYgNDM5LjI4OTA2MiAzMDAuNDQxNDA2IEMgNDUxLjY1NjI1IDI5OS44ODI4MTIgNDYyLjMzNTkzOCAyOTUuMzgyODEyIDQ3MC43Njk1MzEgMjg2Ljk1MzEyNSBNIDYzOS40MDYyNSA0MDUgQyA2MzkuNDA2MjUgNTM0LjI4OTA2MiA1MzQuMjg5MDYyIDYzOS40MDYyNS'+
			'A0MDUgNjM5LjQwNjI1IEMgMjc1LjcxMDkzOCA2MzkuNDA2MjUgMTcwLjU4OTg0NCA1MzQuMjg5MDYyIDE3MC41ODk4NDQgNDA1IEMgMTcwLjU4OTg0NCAyNzUuNzEwOTM4IDI3NS43MTA5MzggMTcwLjU4OTg0NCA0MDUgMTcwLjU4OTg0NCBDIDUzNC4yODkwNjIgMTcwLjU4OTg0NCA2MzkuNDA2MjUgMjc1LjcxMDkzOCA2MzkuNDA2MjUgNDA1IE0gNjgwLjQ0MTQwNiA0MDUgQyA2ODAuNDQxNDA2IDI1My4yMjI2NTYgNTU2Ljc3MzQzOCAxMjkuNTU0Njg4IDQwNSAxMjkuNTU0Njg4IEMgMjUzLjIyMjY1NiAxMjkuNTU0Njg4IDEyOS41NTQ2ODggMjUzLjIyMjY1NiAxMjkuNTU0Njg4IDQwNSBDIDEy'+
			'OS41NTQ2ODggNTU2Ljc3MzQzOCAyNTMuMjIyNjU2IDY4MC40NDE0MDYgNDA1IDY4MC40NDE0MDYgQyA1NTYuNzczNDM4IDY4MC40NDE0MDYgNjgwLjQ0MTQwNiA1NTYuNzczNDM4IDY4MC40NDE0MDYgNDA1ICIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgogPHBhdGggc3Ryb2tlLXdpZHRoPSI0OCIgZD0iTSAtMC4wMDE5NTA1MiAyNC4wMDEzMzIgTCA2ODcuMTY1MzMxIDIzLjk5ODQxNiAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNjEzMzEsIDAuNDMxNjg0LCAtMC40MzE2ODQsIC0wLjYxMzMxLCA2NDAuMjExMzQ3LCAyODEuND'+
			'YzMjg3KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgo8L3N2Zz4K';
		me._stop_image_specification__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_image_specification__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB3aWR0aD0iMTA4MCIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHpvb21BbmRQYW49Im1hZ25pZnkiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNjNTgzZTQ1ZTAiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMjUuNjc5Njg4IDIzLjY0ODQzOCBMIDgwNC4zNTE1NjIgMjMuNjQ4NDM4IEwgODA0LjM1MTU2Mi'+
			'A4MDIuMzIwMzEyIEwgMjUuNjc5Njg4IDgwMi4zMjAzMTIgWiBNIDI1LjY3OTY4OCAyMy42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjdjNDIwYTQ5OTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDE1LjAxNTYyNSAyMy42NDg0MzggQyAxOTkuOTg4MjgxIDIzLjY0ODQzOCAyNS42Nzk2ODggMTk3Ljk1NzAzMSAyNS42Nzk2ODggNDEyLjk4NDM3NSBDIDI1LjY3OTY4OCA2MjguMDA3ODEyIDE5OS45ODgyODEgODAyLjMyMDMxMiA0MTUuMDE1NjI1IDgwMi4zMjAzMTIgQyA2MzAuMDM5MDYyIDgwMi4zMjAzMTIgODA0LjM1MTU2MiA2MjguMDA3ODEy'+
			'IDgwNC4zNTE1NjIgNDEyLjk4NDM3NSBDIDgwNC4zNTE1NjIgMTk3Ljk1NzAzMSA2MzAuMDM5MDYyIDIzLjY0ODQzOCA0MTUuMDE1NjI1IDIzLjY0ODQzOCBaIE0gNDE1LjAxNTYyNSAyMy42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjRjNTFhNmE3ZGMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42Nzk2ODggMC42NDg0MzggTCA3NzkuMzUxNTYyIDAuNjQ4NDM4IEwgNzc5LjM1MTU2MiA3NzkuMzIwMzEyIEwgMC42Nzk2ODggNzc5LjMyMDMxMiBaIE0gMC42Nzk2ODggMC42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9Im'+
			'Q1Nzg0MjNkMjkiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzkwLjAxNTYyNSAwLjY0ODQzOCBDIDE3NC45ODgyODEgMC42NDg0MzggMC42Nzk2ODggMTc0Ljk1NzAzMSAwLjY3OTY4OCAzODkuOTg0Mzc1IEMgMC42Nzk2ODggNjA1LjAwNzgxMiAxNzQuOTg4MjgxIDc3OS4zMjAzMTIgMzkwLjAxNTYyNSA3NzkuMzIwMzEyIEMgNjA1LjAzOTA2MiA3NzkuMzIwMzEyIDc3OS4zNTE1NjIgNjA1LjAwNzgxMiA3NzkuMzUxNTYyIDM4OS45ODQzNzUgQyA3NzkuMzUxNTYyIDE3NC45NTcwMzEgNjA1LjAzOTA2MiAwLjY0ODQzOCAzOTAuMDE1NjI1IDAuNjQ4NDM4IFogTSAzOTAuMDE1'+
			'NjI1IDAuNjQ4NDM4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI5ZjExN2MzNGNjIj4KICAgPHJlY3Qgd2lkdGg9Ijc4MCIgeD0iMCIgaGVpZ2h0PSI3ODAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iOWVkMjU2NGMzOSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjEuOTE0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDY4OC4xNjQwNjIgTCAxMjEuOTE0MDYyIDY4OC4xNjQwNjIgWiBNIDEyMS45MTQwNjIgMTIxLjkxNDA2MiAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2'+
			'xpcC1wYXRoPSJ1cmwoI2NjNTgzZTQ1ZTApIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjN2M0MjBhNDk5NykiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAyNSwgMjMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCM5ZjExN2MzNGNjKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzRjNTFhNmE3ZGMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2Q1Nzg0MjNkMjkpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTSAwLjY3OTY4OCAwLjY0ODQzOCBMIDc3OS4zNTE1NjIgMC42NDg0MzggTCA3NzkuMzUxNTYy'+
			'IDc3OS4zMjAzMTIgTCAwLjY3OTY4OCA3NzkuMzIwMzEyIFogTSAwLjY3OTY4OCAwLjY0ODQzOCAiIGZpbGw9IiMxMzI5NTkiLz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsaXAtcGF0aD0idXJsKCM5ZWQyNTY0YzM5KSI+CiAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0gNDQyLjU1MDc4MSAzMjAuNjUyMzQ0IEwgMzQ0LjMzNTkzOCAzMzYuODI4MTI1IEwgMzM2LjgyODEyNSAzNTguNzgxMjUgTCAzNDQuOTE0MDYyIDM1OC4yMDMxMjUgQyAzNTUuMzEyNSAzNTcuNjI1IDM2MS42Njc5NjkgMzU3Lj'+
			'YyNSAzNjUuMTM2NzE5IDM2MS4wODk4NDQgQyAzNjguMDIzNDM4IDM2My45ODA0NjkgMzY4LjYwMTU2MiAzNjYuMjg5MDYyIDM2OC42MDE1NjIgMzY3LjQ0NTMxMiBDIDM2OC42MDE1NjIgMzczLjIyMjY1NiAzNjYuODY3MTg4IDM4Mi40Njg3NSAzNjMuNDAyMzQ0IDM5NC41OTc2NTYgTCAzMjQuNjk1MzEyIDUyNy40NzY1NjIgQyAzMjEuMjMwNDY5IDUzOC40NTMxMjUgMzE5LjQ5NjA5NCA1NDcuNjk1MzEyIDMxOS40OTYwOTQgNTU1LjIwNzAzMSBDIDMxOS40OTYwOTQgNTY3LjMzOTg0NCAzMjMuNTM5MDYyIDU3Ny4xNjAxNTYgMzMyLjIwNzAzMSA1ODUuMjQ2MDk0IEMgMzQwLjI5Mjk2OSA1OTIu'+
			'NzU3ODEyIDM1MS4yNjk1MzEgNTk2LjgwMDc4MSAzNjQuNTU4NTk0IDU5Ni44MDA3ODEgQyAzOTguMDY2NDA2IDU5Ni44MDA3ODEgNDI5LjgzOTg0NCA1NzEuMzgyODEyIDQ1OC43MjY1NjIgNTIxLjEyMTA5NCBMIDQ2MS42MTMyODEgNTE2LjUgTCA0NDIuNTUwNzgxIDUwNS41MjM0MzggTCA0MzkuNjYwMTU2IDUwOS41NjY0MDYgQyA0MjguMTA1NDY5IDUyNi44OTg0MzggNDE4Ljg2MzI4MSA1MzkuMDMxMjUgNDEwLjc3NzM0NCA1NDUuMzg2NzE5IEMgNDA4LjQ2NDg0NCA1NDcuMTE3MTg4IDQwNi43MzA0NjkgNTQ4LjI3MzQzOCA0MDUgNTQ4LjI3MzQzOCBDIDQwNSA1NDguMjczNDM4IDQwNC40Mj'+
			'E4NzUgNTQ4LjI3MzQzOCA0MDMuODQzNzUgNTQ3LjExNzE4OCBDIDQwMi42ODc1IDU0NS45NjA5MzggNDAyLjY4NzUgNTQ1LjM4NjcxOSA0MDIuNjg3NSA1NDUuMzg2NzE5IEMgNDAyLjY4NzUgNTQzLjY1MjM0NCA0MDMuMjY1NjI1IDUzOS4wMzEyNSA0MDcuMzA4NTk0IDUyNC41ODU5MzggTCA0NjYuMjM4MjgxIDMyMC4wNzQyMTkgTCA0NDIuNTUwNzgxIDMyMC4wNzQyMTkgWiBNIDQ3Mi41OTM3NSAyODMuNjc1NzgxIEMgNDgxLjgzNTkzOCAyNzQuNDMzNTk0IDQ4Ni40NTcwMzEgMjYzLjQ1NzAzMSA0ODYuNDU3MDMxIDI1MC43NDYwOTQgQyA0ODYuNDU3MDMxIDIzOC4wMzUxNTYgNDgxLjgzNTkz'+
			'OCAyMjcuMDU4NTk0IDQ3My4xNjc5NjkgMjE3LjgxNjQwNiBDIDQ2NC41MDM5MDYgMjA4LjU3NDIxOSA0NTIuOTQ5MjE5IDIwMy45NDkyMTkgNDQwLjIzODI4MSAyMDMuOTQ5MjE5IEMgNDI3LjUzMTI1IDIwMy45NDkyMTkgNDE2LjU1MDc4MSAyMDguNTc0MjE5IDQwNy4zMDg1OTQgMjE3LjgxNjQwNiBDIDM5OC42NDQ1MzEgMjI3LjA1ODU5NCAzOTQuMDIzNDM4IDIzOC4wMzUxNTYgMzk0LjAyMzQzOCAyNTAuNzQ2MDk0IEMgMzk0LjAyMzQzOCAyNjMuNDU3MDMxIDM5OC42NDQ1MzEgMjc0LjQzMzU5NCA0MDcuODg2NzE5IDI4My42NzU3ODEgQyA0MTcuMTI4OTA2IDI5Mi45MjE4NzUgNDI4LjEwNT'+
			'Q2OSAyOTcuNTQyOTY5IDQ0MC4yMzgyODEgMjk3LjU0Mjk2OSBDIDQ1Mi45NDkyMTkgMjk2Ljk2NDg0NCA0NjMuOTI1NzgxIDI5Mi4zNDM3NSA0NzIuNTkzNzUgMjgzLjY3NTc4MSBNIDY0NS45MTAxNTYgNDA1IEMgNjQ1LjkxMDE1NiA1MzcuODc1IDUzNy44NzUgNjQ1LjkxMDE1NiA0MDUgNjQ1LjkxMDE1NiBDIDI3Mi4xMjEwOTQgNjQ1LjkxMDE1NiAxNjQuMDg5ODQ0IDUzNy44NzUgMTY0LjA4OTg0NCA0MDUgQyAxNjQuMDg5ODQ0IDI3Mi4xMjEwOTQgMjcyLjEyMTA5NCAxNjQuMDg5ODQ0IDQwNSAxNjQuMDg5ODQ0IEMgNTM3Ljg3NSAxNjQuMDg5ODQ0IDY0NS45MTAxNTYgMjcyLjEyMTA5NCA2'+
			'NDUuOTEwMTU2IDQwNSBNIDY4OC4wODIwMzEgNDA1IEMgNjg4LjA4MjAzMSAyNDkuMDExNzE5IDU2MC45ODQzNzUgMTIxLjkxNDA2MiA0MDUgMTIxLjkxNDA2MiBDIDI0OS4wMTE3MTkgMTIxLjkxNDA2MiAxMjEuOTE0MDYyIDI0OS4wMTE3MTkgMTIxLjkxNDA2MiA0MDUgQyAxMjEuOTE0MDYyIDU2MC45ODQzNzUgMjQ5LjAxMTcxOSA2ODguMDgyMDMxIDQwNSA2ODguMDgyMDMxIEMgNTYwLjk4NDM3NSA2ODguMDgyMDMxIDY4OC4wODIwMzEgNTYwLjk4NDM3NSA2ODguMDgyMDMxIDQwNSAiIGZpbGw9IiNmZmZmZmYiLz4KIDwvZz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iNDgiIGQ9Ik0gLTAuMDAyOT'+
			'M1MDEgMjQuMDAwOTA3IEwgNzE0LjU5NDA3OCAyNC4wMDA4ODMgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjYyODg3OCwgMC40MDg2NzEsIC0wLjQwODY3MSwgLTAuNjI4ODc4LCA2NTAuNjQ2NDc1LCAyOTIuMjM5MzgpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+Cjwvc3ZnPgo=';
		me._stop_image_specification__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stop_image_specification";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 276px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_image_specification.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_image_specification.onclick=function (e) {
			me._stop_image_specification.style.transition='none';
			me._stop_image_specification.style.visibility='hidden';
			me._stop_image_specification.ggVisible=false;
			me._start_image_specification.style.transition='none';
			me._start_image_specification.style.visibility=(Number(me._start_image_specification.style.opacity)>0||!me._start_image_specification.style.opacity)?'inherit':'hidden';
			me._start_image_specification.ggVisible=true;
		}
		me._stop_image_specification.onmouseenter=function (e) {
			me._stop_image_specification__img.style.visibility='hidden';
			me._stop_image_specification__imgo.style.visibility='inherit';
			player.setVariableValue('esconder_cursor', true);
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me.elementMouseOver['stop_image_specification']=true;
		}
		me._stop_image_specification.onmouseleave=function (e) {
			me._stop_image_specification__img.style.visibility='inherit';
			me._stop_image_specification__imgo.style.visibility='hidden';
			player.setVariableValue('esconder_cursor', false);
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me.elementMouseOver['stop_image_specification']=false;
		}
		me._stop_image_specification.ggUpdatePosition=function (useTransition) {
		}
		me._button_specifications.appendChild(me._stop_image_specification);
		el=me._start_image_specification=document.createElement('div');
		els=me._start_image_specification__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB3aWR0aD0iMTA4MCIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHpvb21BbmRQYW49Im1hZ25pZnkiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjA0OTVjY2ZkYWYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iNTRjM2U0MTBhZSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImQzZWNmYTY3YmIiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iODYzMjY5ZDI1NSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJhN2Y5NjFkODI0Ij4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgeD0iMCIgaGVpZ2h0PSI3MjQiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0'+
			'aCBpZD0iYmVlNGQ4ZDNjYiI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjkuNTU0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDY4MC44MDQ2ODggTCAxMjkuNTU0Njg4IDY4MC44MDQ2ODggWiBNIDEyOS41NTQ2ODggMTI5LjU1NDY4OCAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzA0OTVjY2ZkYWYpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNTRjM2U0MTBhZSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKC'+
			'NhN2Y5NjFkODI0KSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2QzZWNmYTY3YmIpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzg2MzI2OWQyNTUpIj4KICAgICAgIDxwYXRoIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbD0iIzI3MjcyNyIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1'+
			'cmwoI2JlZTRkOGQzY2IpIj4KICA8cGF0aCBkPSJNIDQ0MS41MzkwNjIgMzIyLjkyOTY4OCBMIDM0NS45NzY1NjIgMzM4LjY2Nzk2OSBMIDMzOC42Njc5NjkgMzYwLjAyNzM0NCBMIDM0Ni41MzkwNjIgMzU5LjQ2NDg0NCBDIDM1Ni42NTYyNSAzNTguOTA2MjUgMzYyLjgzOTg0NCAzNTguOTA2MjUgMzY2LjIxMDkzOCAzNjIuMjc3MzQ0IEMgMzY5LjAyMzQzOCAzNjUuMDg5ODQ0IDM2OS41ODU5MzggMzY3LjMzNTkzOCAzNjkuNTg1OTM4IDM2OC40NjA5MzggQyAzNjkuNTg1OTM4IDM3NC4wODIwMzEgMzY3Ljg5ODQzOCAzODMuMDc0MjE5IDM2NC41MjczNDQgMzk0Ljg3ODkwNiBMIDMyNi44NjMyOD'+
			'EgNTI0LjE3MTg3NSBDIDMyMy40OTIxODggNTM0Ljg1MTU2MiAzMjEuODA0Njg4IDU0My44NDM3NSAzMjEuODA0Njg4IDU1MS4xNTIzNDQgQyAzMjEuODA0Njg4IDU2Mi45NTcwMzEgMzI1LjczODI4MSA1NzIuNTE1NjI1IDMzNC4xNzE4NzUgNTgwLjM4MjgxMiBDIDM0Mi4wMzkwNjIgNTg3LjY5MTQwNiAzNTIuNzIyNjU2IDU5MS42MjUgMzY1LjY0ODQzOCA1OTEuNjI1IEMgMzk4LjI1MzkwNiA1OTEuNjI1IDQyOS4xNzE4NzUgNTY2Ljg5MDYyNSA0NTcuMjc3MzQ0IDUxNy45ODgyODEgTCA0NjAuMDg1OTM4IDUxMy40ODgyODEgTCA0NDEuNTM5MDYyIDUwMi44MDg1OTQgTCA0MzguNzI2NTYyIDUw'+
			'Ni43NDYwOTQgQyA0MjcuNDg0Mzc1IDUyMy42MDkzNzUgNDE4LjQ5MjE4OCA1MzUuNDE0MDYyIDQxMC42MjEwOTQgNTQxLjU5NzY1NiBDIDQwOC4zNzEwOTQgNTQzLjI4MTI1IDQwNi42ODM1OTQgNTQ0LjQwNjI1IDQwNSA1NDQuNDA2MjUgQyA0MDUgNTQ0LjQwNjI1IDQwNC40Mzc1IDU0NC40MDYyNSA0MDMuODc1IDU0My4yODEyNSBDIDQwMi43NSA1NDIuMTYwMTU2IDQwMi43NSA1NDEuNTk3NjU2IDQwMi43NSA1NDEuNTk3NjU2IEMgNDAyLjc1IDUzOS45MTAxNTYgNDAzLjMxMjUgNTM1LjQxNDA2MiA0MDcuMjQ2MDk0IDUyMS4zNTkzNzUgTCA0NjQuNTg1OTM4IDMyMi4zNjcxODggTCA0NDEuNT'+
			'M5MDYyIDMyMi4zNjcxODggWiBNIDQ3MC43Njk1MzEgMjg2Ljk1MzEyNSBDIDQ3OS43NjE3MTkgMjc3Ljk1NzAzMSA0ODQuMjU3ODEyIDI2Ny4yNzczNDQgNDg0LjI1NzgxMiAyNTQuOTEwMTU2IEMgNDg0LjI1NzgxMiAyNDIuNTQyOTY5IDQ3OS43NjE3MTkgMjMxLjg2MzI4MSA0NzEuMzMyMDMxIDIyMi44NzEwOTQgQyA0NjIuODk4NDM4IDIxMy44NzUgNDUxLjY1NjI1IDIwOS4zNzg5MDYgNDM5LjI4OTA2MiAyMDkuMzc4OTA2IEMgNDI2LjkyMTg3NSAyMDkuMzc4OTA2IDQxNi4yNDIxODggMjEzLjg3NSA0MDcuMjQ2MDk0IDIyMi44NzEwOTQgQyAzOTguODE2NDA2IDIzMS44NjMyODEgMzk0LjMy'+
			'MDMxMiAyNDIuNTQyOTY5IDM5NC4zMjAzMTIgMjU0LjkxMDE1NiBDIDM5NC4zMjAzMTIgMjY3LjI3NzM0NCAzOTguODE2NDA2IDI3Ny45NTcwMzEgNDA3LjgwODU5NCAyODYuOTUzMTI1IEMgNDE2LjgwNDY4OCAyOTUuOTQ1MzEyIDQyNy40ODQzNzUgMzAwLjQ0MTQwNiA0MzkuMjg5MDYyIDMwMC40NDE0MDYgQyA0NTEuNjU2MjUgMjk5Ljg4MjgxMiA0NjIuMzM1OTM4IDI5NS4zODI4MTIgNDcwLjc2OTUzMSAyODYuOTUzMTI1IE0gNjM5LjQwNjI1IDQwNSBDIDYzOS40MDYyNSA1MzQuMjg5MDYyIDUzNC4yODkwNjIgNjM5LjQwNjI1IDQwNSA2MzkuNDA2MjUgQyAyNzUuNzEwOTM4IDYzOS40MDYyNS'+
			'AxNzAuNTg5ODQ0IDUzNC4yODkwNjIgMTcwLjU4OTg0NCA0MDUgQyAxNzAuNTg5ODQ0IDI3NS43MTA5MzggMjc1LjcxMDkzOCAxNzAuNTg5ODQ0IDQwNSAxNzAuNTg5ODQ0IEMgNTM0LjI4OTA2MiAxNzAuNTg5ODQ0IDYzOS40MDYyNSAyNzUuNzEwOTM4IDYzOS40MDYyNSA0MDUgTSA2ODAuNDQxNDA2IDQwNSBDIDY4MC40NDE0MDYgMjUzLjIyMjY1NiA1NTYuNzczNDM4IDEyOS41NTQ2ODggNDA1IDEyOS41NTQ2ODggQyAyNTMuMjIyNjU2IDEyOS41NTQ2ODggMTI5LjU1NDY4OCAyNTMuMjIyNjU2IDEyOS41NTQ2ODggNDA1IEMgMTI5LjU1NDY4OCA1NTYuNzczNDM4IDI1My4yMjI2NTYgNjgwLjQ0'+
			'MTQwNiA0MDUgNjgwLjQ0MTQwNiBDIDU1Ni43NzM0MzggNjgwLjQ0MTQwNiA2ODAuNDQxNDA2IDU1Ni43NzM0MzggNjgwLjQ0MTQwNiA0MDUgIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._start_image_specification__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_image_specification__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB3aWR0aD0iMTA4MCIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHpvb21BbmRQYW49Im1hZ25pZnkiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImRjMWEzOTFhMTUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMTUuNjY0MDYyIDE1LjY2NDA2MiBMIDc5NC4zMzU5MzggMTUuNjY0MDYyIEwgNzk0LjMzNTkzOC'+
			'A3OTQuMzM1OTM4IEwgMTUuNjY0MDYyIDc5NC4zMzU5MzggWiBNIDE1LjY2NDA2MiAxNS42NjQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjUzMzU4YzMxYzMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDE1LjY2NDA2MiBDIDE4OS45NzY1NjIgMTUuNjY0MDYyIDE1LjY2NDA2MiAxODkuOTc2NTYyIDE1LjY2NDA2MiA0MDUgQyAxNS42NjQwNjIgNjIwLjAyMzQzOCAxODkuOTc2NTYyIDc5NC4zMzU5MzggNDA1IDc5NC4zMzU5MzggQyA2MjAuMDIzNDM4IDc5NC4zMzU5MzggNzk0LjMzNTkzOCA2MjAuMDIzNDM4IDc5NC4zMzU5MzggNDA1IEMgNzk0'+
			'LjMzNTkzOCAxODkuOTc2NTYyIDYyMC4wMjM0MzggMTUuNjY0MDYyIDQwNSAxNS42NjQwNjIgWiBNIDQwNSAxNS42NjQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjI3MzhiODY3OTMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NjQwNjIgMC42NjQwNjIgTCA3NzkuMzM1OTM4IDAuNjY0MDYyIEwgNzc5LjMzNTkzOCA3NzkuMzM1OTM4IEwgMC42NjQwNjIgNzc5LjMzNTkzOCBaIE0gMC42NjQwNjIgMC42NjQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImVhNzcyMWU2MmYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIG'+
			'Q9Ik0gMzkwIDAuNjY0MDYyIEMgMTc0Ljk3NjU2MiAwLjY2NDA2MiAwLjY2NDA2MiAxNzQuOTc2NTYyIDAuNjY0MDYyIDM5MCBDIDAuNjY0MDYyIDYwNS4wMjM0MzggMTc0Ljk3NjU2MiA3NzkuMzM1OTM4IDM5MCA3NzkuMzM1OTM4IEMgNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDc3OS4zMzU5MzggNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDM5MCBDIDc3OS4zMzU5MzggMTc0Ljk3NjU2MiA2MDUuMDIzNDM4IDAuNjY0MDYyIDM5MCAwLjY2NDA2MiBaIE0gMzkwIDAuNjY0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJmODJmNGQwNjNhIj4KICAgPHJlY3Qgd2lkdGg9Ijc4MCIgeD0i'+
			'MCIgaGVpZ2h0PSI3ODAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZDQ1ODc0MDMyMSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjEuOTE0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDY4OC4xNjQwNjIgTCAxMjEuOTE0MDYyIDY4OC4xNjQwNjIgWiBNIDEyMS45MTQwNjIgMTIxLjkxNDA2MiAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2RjMWEzOTFhMTUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNTMzNThjMzFjMykiPgogICA8ZyB0cmFuc2Zvcm09Im1hdH'+
			'JpeCgxLCAwLCAwLCAxLCAxNSwgMTUpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmODJmNGQwNjNhKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzI3MzhiODY3OTMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2VhNzcyMWU2MmYpIj4KICAgICAgIDxwYXRoIGQ9Ik0gMC42NjQwNjIgMC42NjQwNjIgTCA3NzkuMzM1OTM4IDAuNjY0MDYyIEwgNzc5LjMzNTkzOCA3NzkuMzM1OTM4IEwgMC42NjQwNjIgNzc5LjMzNTkzOCBaIE0gMC42NjQwNjIgMC42NjQwNjIgIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGZpbGw9IiMyNzI3MjciLz4KICAgICAgPC9n'+
			'PgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsaXAtcGF0aD0idXJsKCNkNDU4NzQwMzIxKSI+CiAgPHBhdGggZD0iTSA0NDIuNTUwNzgxIDMyMC42NTIzNDQgTCAzNDQuMzM1OTM4IDMzNi44MjgxMjUgTCAzMzYuODI4MTI1IDM1OC43ODEyNSBMIDM0NC45MTQwNjIgMzU4LjIwMzEyNSBDIDM1NS4zMTI1IDM1Ny42MjUgMzYxLjY2Nzk2OSAzNTcuNjI1IDM2NS4xMzY3MTkgMzYxLjA4OTg0NCBDIDM2OC4wMjM0MzggMzYzLjk4MDQ2OSAzNjguNjAxNTYyIDM2Ni4yODkwNjIgMzY4LjYwMTU2MiAzNjcuNDQ1MzEyIEMgMzY4LjYwMTU2MiAzNzMuMjIyNjU2IDM2Ni'+
			'44NjcxODggMzgyLjQ2ODc1IDM2My40MDIzNDQgMzk0LjU5NzY1NiBMIDMyNC42OTUzMTIgNTI3LjQ3NjU2MiBDIDMyMS4yMzA0NjkgNTM4LjQ1MzEyNSAzMTkuNDk2MDk0IDU0Ny42OTUzMTIgMzE5LjQ5NjA5NCA1NTUuMjA3MDMxIEMgMzE5LjQ5NjA5NCA1NjcuMzM5ODQ0IDMyMy41MzkwNjIgNTc3LjE2MDE1NiAzMzIuMjA3MDMxIDU4NS4yNDYwOTQgQyAzNDAuMjkyOTY5IDU5Mi43NTc4MTIgMzUxLjI2OTUzMSA1OTYuODAwNzgxIDM2NC41NTg1OTQgNTk2LjgwMDc4MSBDIDM5OC4wNjY0MDYgNTk2LjgwMDc4MSA0MjkuODM5ODQ0IDU3MS4zODI4MTIgNDU4LjcyNjU2MiA1MjEuMTIxMDk0IEwg'+
			'NDYxLjYxMzI4MSA1MTYuNSBMIDQ0Mi41NTA3ODEgNTA1LjUyMzQzOCBMIDQzOS42NjAxNTYgNTA5LjU2NjQwNiBDIDQyOC4xMDU0NjkgNTI2Ljg5ODQzOCA0MTguODYzMjgxIDUzOS4wMzEyNSA0MTAuNzc3MzQ0IDU0NS4zODY3MTkgQyA0MDguNDY0ODQ0IDU0Ny4xMTcxODggNDA2LjczMDQ2OSA1NDguMjczNDM4IDQwNSA1NDguMjczNDM4IEMgNDA1IDU0OC4yNzM0MzggNDA0LjQyMTg3NSA1NDguMjczNDM4IDQwMy44NDM3NSA1NDcuMTE3MTg4IEMgNDAyLjY4NzUgNTQ1Ljk2MDkzOCA0MDIuNjg3NSA1NDUuMzg2NzE5IDQwMi42ODc1IDU0NS4zODY3MTkgQyA0MDIuNjg3NSA1NDMuNjUyMzQ0ID'+
			'QwMy4yNjU2MjUgNTM5LjAzMTI1IDQwNy4zMDg1OTQgNTI0LjU4NTkzOCBMIDQ2Ni4yMzgyODEgMzIwLjA3NDIxOSBMIDQ0Mi41NTA3ODEgMzIwLjA3NDIxOSBaIE0gNDcyLjU5Mzc1IDI4My42NzU3ODEgQyA0ODEuODM1OTM4IDI3NC40MzM1OTQgNDg2LjQ1NzAzMSAyNjMuNDU3MDMxIDQ4Ni40NTcwMzEgMjUwLjc0NjA5NCBDIDQ4Ni40NTcwMzEgMjM4LjAzNTE1NiA0ODEuODM1OTM4IDIyNy4wNTg1OTQgNDczLjE2Nzk2OSAyMTcuODE2NDA2IEMgNDY0LjUwMzkwNiAyMDguNTc0MjE5IDQ1Mi45NDkyMTkgMjAzLjk0OTIxOSA0NDAuMjM4MjgxIDIwMy45NDkyMTkgQyA0MjcuNTMxMjUgMjAzLjk0'+
			'OTIxOSA0MTYuNTUwNzgxIDIwOC41NzQyMTkgNDA3LjMwODU5NCAyMTcuODE2NDA2IEMgMzk4LjY0NDUzMSAyMjcuMDU4NTk0IDM5NC4wMjM0MzggMjM4LjAzNTE1NiAzOTQuMDIzNDM4IDI1MC43NDYwOTQgQyAzOTQuMDIzNDM4IDI2My40NTcwMzEgMzk4LjY0NDUzMSAyNzQuNDMzNTk0IDQwNy44ODY3MTkgMjgzLjY3NTc4MSBDIDQxNy4xMjg5MDYgMjkyLjkyMTg3NSA0MjguMTA1NDY5IDI5Ny41NDI5NjkgNDQwLjIzODI4MSAyOTcuNTQyOTY5IEMgNDUyLjk0OTIxOSAyOTYuOTY0ODQ0IDQ2My45MjU3ODEgMjkyLjM0Mzc1IDQ3Mi41OTM3NSAyODMuNjc1NzgxIE0gNjQ1LjkxMDE1NiA0MDUgQy'+
			'A2NDUuOTEwMTU2IDUzNy44NzUgNTM3Ljg3NSA2NDUuOTEwMTU2IDQwNSA2NDUuOTEwMTU2IEMgMjcyLjEyMTA5NCA2NDUuOTEwMTU2IDE2NC4wODk4NDQgNTM3Ljg3NSAxNjQuMDg5ODQ0IDQwNSBDIDE2NC4wODk4NDQgMjcyLjEyMTA5NCAyNzIuMTIxMDk0IDE2NC4wODk4NDQgNDA1IDE2NC4wODk4NDQgQyA1MzcuODc1IDE2NC4wODk4NDQgNjQ1LjkxMDE1NiAyNzIuMTIxMDk0IDY0NS45MTAxNTYgNDA1IE0gNjg4LjA4MjAzMSA0MDUgQyA2ODguMDgyMDMxIDI0OS4wMTE3MTkgNTYwLjk4NDM3NSAxMjEuOTE0MDYyIDQwNSAxMjEuOTE0MDYyIEMgMjQ5LjAxMTcxOSAxMjEuOTE0MDYyIDEyMS45'+
			'MTQwNjIgMjQ5LjAxMTcxOSAxMjEuOTE0MDYyIDQwNSBDIDEyMS45MTQwNjIgNTYwLjk4NDM3NSAyNDkuMDExNzE5IDY4OC4wODIwMzEgNDA1IDY4OC4wODIwMzEgQyA1NjAuOTg0Mzc1IDY4OC4wODIwMzEgNjg4LjA4MjAzMSA1NjAuOTg0Mzc1IDY4OC4wODIwMzEgNDA1ICIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_image_specification__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="start_image_specification";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 276px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_image_specification.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_image_specification.onclick=function (e) {
			me._start_image_specification.style.transition='none';
			me._start_image_specification.style.visibility='hidden';
			me._start_image_specification.ggVisible=false;
			me._stop_image_specification.style.transition='none';
			me._stop_image_specification.style.visibility=(Number(me._stop_image_specification.style.opacity)>0||!me._stop_image_specification.style.opacity)?'inherit':'hidden';
			me._stop_image_specification.ggVisible=true;
		}
		me._start_image_specification.onmouseenter=function (e) {
			me._start_image_specification__img.style.visibility='hidden';
			me._start_image_specification__imgo.style.visibility='inherit';
			player.setVariableValue('esconder_cursor', true);
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me.elementMouseOver['start_image_specification']=true;
		}
		me._start_image_specification.onmouseleave=function (e) {
			me._start_image_specification__img.style.visibility='inherit';
			me._start_image_specification__imgo.style.visibility='hidden';
			player.setVariableValue('esconder_cursor', false);
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me.elementMouseOver['start_image_specification']=false;
		}
		me._start_image_specification.ggUpdatePosition=function (useTransition) {
		}
		me._button_specifications.appendChild(me._start_image_specification);
		el=me._tooltip_btn_specifications=document.createElement('div');
		els=me._tooltip_btn_specifications__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_specifications";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 43px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 24px;';
		hs+='left : 249px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_specifications.ggUpdateText=function() {
			var params = [];
			var hs = player._("Specifications", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_specifications.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_specifications.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_specifications.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me.elementMouseOver['tooltip_btn_specifications']=true;
		}
		me._tooltip_btn_specifications.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me.elementMouseOver['tooltip_btn_specifications']=false;
		}
		me._tooltip_btn_specifications.ggUpdatePosition=function (useTransition) {
		}
		me._button_specifications.appendChild(me._tooltip_btn_specifications);
		el=me._background_specifications=document.createElement('div');
		el.ggId="Background Specifications";
		el.ggDy=-94;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(163,163,163,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='height : 43.9746%;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.9746% + 0px) / 2) - 94px);';
		hs+='visibility : hidden;';
		hs+='width : 82.1333%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._background_specifications.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._background_specifications.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['background_specifications']=true;
		}
		me._background_specifications.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me.elementMouseOver['background_specifications']=false;
		}
		me._background_specifications.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 91.8269%;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 95.4098%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 100;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("CENTRO DE MEM\xd3RIA MINAS T\xcaNIS CLUBE\n\n\ud83d\udccd Rua da Bahia, 2244 - Lourdes - Belo Horizonte - MG\n\n\ud83c\udfc6 Acervo: 50 mil itens, dos quais 3 mil est\xe3o expostos.\n\n\ud83d\udd58 Visita\xe7\xe3o:\tDe ter\xe7a a s\xe1bado, das 10h \xe0s 20h.\n\tDomingos e feriados, das 11h \xe0s 19h.\n\n\u2705 Aberto ao p\xfablico externo.\n\n\ud83d\udcde Contatos: 3516-1025 \/ 3516-1028 \/ 3516-1039", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._background_specifications.appendChild(me._text_2);
		me._button_specifications.appendChild(me._background_specifications);
		me.divSkin.appendChild(me._button_specifications);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 50%;';
		hs+='margin-left : -111px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 222px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu.ggDragInertiaX *= 0.96;
				me._thumbnail_menu.ggDragInertiaY *= 0.96;
				me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
				me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_menu__content.onmouseup = null;
			me._thumbnail_menu__content.onmousemove = null;
			me._thumbnail_menu__content.ontouchend = null;
			me._thumbnail_menu__content.ontouchmove = null;
			me._thumbnail_menu__content.onpointerup = null;
			me._thumbnail_menu__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu.ggDragStartY) > 10) me._thumbnail_menu.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
			me._thumbnail_menu.ggDragInertiaX = -diffX;
			me._thumbnail_menu.ggDragInertiaY = -diffY;
			me._thumbnail_menu.ggDragLastX = eventX;
			me._thumbnail_menu.ggDragLastY = eventY;
			me._thumbnail_menu.ggScrollByX(-diffX);
			me._thumbnail_menu.ggScrollByY(-diffY);
		}
		me._thumbnail_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = me._thumbnail_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = me._thumbnail_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.onmouseup = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.ontouchend = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.onmousemove = me._thumbnail_menu__content.mousetouchmove;
			me._thumbnail_menu__content.ontouchmove = me._thumbnail_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 423px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 423px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: 130;';
		hs+='background : rgba(39,39,39,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 74px;';
		hs+='height : 125px;';
		hs+='left : 16.87%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 66.0938%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
				else {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['thumbnail_menu']=true;
		}
		me._thumbnail_menu.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['thumbnail_menu']=false;
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 193;
		el.ggHeight = 120;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 21px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 193px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 32px;';
		hs+='left : 238px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style.transition='';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
				else {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
			}
		}
		me._thumbnail.logicBlock_visible();
		me._thumbnail.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail.onmouseenter=function (e) {
			me._tooltip_btn_thumbnail.style.transition='none';
			me._tooltip_btn_thumbnail.style.visibility=(Number(me._tooltip_btn_thumbnail.style.opacity)>0||!me._tooltip_btn_thumbnail.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_thumbnail.ggVisible=true;
			player.setVariableValue('esconder_cursor', true);
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me.elementMouseOver['thumbnail']=true;
		}
		me._thumbnail.onmouseleave=function (e) {
			me._tooltip_btn_thumbnail.style.transition='none';
			me._tooltip_btn_thumbnail.style.visibility='hidden';
			me._tooltip_btn_thumbnail.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me.elementMouseOver['thumbnail']=false;
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button=document.createElement('div');
		els=me._thumbnail_hide_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVTMzQsMTIxLjEsNjUsMTIxLjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUzk2LDguOSw2NSw4Ljl6IE01NS40LDU3LjggICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuMyAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIu'+
			'MnogTTMyLjgsMTAwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4yICAgbDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6ICAgIE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDYxLjlsMTIuNy0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41ICAgYy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOG'+
			'MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjRDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6IiBmaWxsPSIjMTMyOTU5Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMt'+
			'MC40LDAtMC44LTAuMS0xLjEtMC40ICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi'+
			'41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnogTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNCAgIGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40ICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAu'+
			'MywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMn'+
			'oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRTOTkuNCwyLjYsNjUsMi42eiBNNTQuMyw1Ny4xICAgYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICBjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQu'+
			'NCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNCAgIGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6ICAgIE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44ICAgYy0xLjUsMC0yLjctMS4yLT'+
			'IuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjdDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPSIjMTMyOTU5Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU0LjMsNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTEuNkw1NC4zLDY4LjdWNTcuMXogTTIzLjcsNzIuOVY1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0gyNi40QzI0LjksNzUuNywyMy43LDc0LjQsMjMuNyw3Mi45eiBN'+
			'MjkuMywxMDQuNGMtMC40LDAtMC45LTAuMi0xLjItMC41ICAgbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zICAgQzMwLjEsMTA0LjIsMjkuNywxMDQuNCwyOS4zLDEwNC40eiBNNzUuNyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g2MS41bDE0LjEtMTQuMUw3NS43LDcyLjlMNzUuNyw3Mi45eiBNMTA2LjMsNzIuOSAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdIODcuOGMtMS41LDAtMi43LTEuMi0yLjctMi43VjU3LjFjMC'+
			'0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43ICAgQzEwNi4zLDU3LjEsMTA2LjMsNzIuOSwxMDYuMyw3Mi45eiBNNTQuMyw1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43ICAgaDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjUgICBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIu'+
			'NGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjMgICBDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45ICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjcgICBDMTA2LjMsNTcuMSwxMDYuMy'+
			'w3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_hide_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_hide_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button.style.transition='opacity 0s';
				if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button.style.visibility="hidden";
					me._thumbnail_hide_button.style.opacity=0;
				}
				else {
					me._thumbnail_hide_button.style.visibility=me._thumbnail_hide_button.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button.style.opacity=1;
				}
			}
		}
		me._thumbnail_hide_button.logicBlock_alpha();
		me._thumbnail_hide_button.onmouseenter=function (e) {
			me._thumbnail_hide_button__img.style.visibility='hidden';
			me._thumbnail_hide_button__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_hide_button']=true;
		}
		me._thumbnail_hide_button.onmouseleave=function (e) {
			me._thumbnail_hide_button__img.style.visibility='inherit';
			me._thumbnail_hide_button__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_hide_button']=false;
		}
		me._thumbnail_hide_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button);
		el=me._thumbnail_show_button=document.createElement('div');
		els=me._thumbnail_show_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xMTguOSwzOTdjMC0zMS0yNS4xLTU2LjEtNTYuMS01Ni4xYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMSAgIEMtMTQ0LDQ1My4xLTExOC45LDQyOC0xMTguOSwzOTd6IE0tMjA5LjcsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuM2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjQgICB2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnogTS0xODIuMSw0MDYuNmMtMS40LDAtMi41'+
			'LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiBNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjMgICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xNTQuNSw0MDYuNnoiIGZpbGw9IiMyNzI3MjciLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTE1NC41LD'+
			'QwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTE1NC41LDQwNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zICAgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0'+
			'aCBkPSJNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_show_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xMTIuNiwzOTdjMC0zNC40LTI3LjktNjIuNC02Mi40LTYyLjRjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjQgICBDLTE0MC42LDQ1OS40LTExMi42LDQzMS40LTExMi42LDM5N3ogTS0yMTMuNiw0MDcuNmMtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiBNLTE4Mi45LDQwNy42Yy0x'+
			'LjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjkgICBjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6IE0tMTUyLjIsNDA3LjYgICBjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE1Mi4yLDQwNy42eiIgZmlsbD0iIzI3MjcyNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik'+
			'0tMTUyLjIsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMTUyLjIsNDA3LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnoiIGZpbGw9IiNGRkZGRkYiLz4K'+
			'ICAgIDxwYXRoIGQ9Ik0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_show_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_show_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_show_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button.style.transition='opacity 0s';
				if (me._thumbnail_show_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button.style.visibility=me._thumbnail_show_button.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button.style.opacity=1;
				}
				else {
					me._thumbnail_show_button.style.visibility="hidden";
					me._thumbnail_show_button.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button.logicBlock_alpha();
		me._thumbnail_show_button.onmouseenter=function (e) {
			me._thumbnail_show_button__img.style.visibility='hidden';
			me._thumbnail_show_button__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button']=true;
		}
		me._thumbnail_show_button.onmouseleave=function (e) {
			me._thumbnail_show_button__img.style.visibility='inherit';
			me._thumbnail_show_button__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button']=false;
		}
		me._thumbnail_show_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button);
		el=me._tooltip_btn_thumbnail=document.createElement('div');
		els=me._tooltip_btn_thumbnail__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 34px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 24px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_thumbnail.ggUpdateText=function() {
			var params = [];
			var hs = player._("Highlights", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_thumbnail.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_thumbnail.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me.elementMouseOver['tooltip_btn_thumbnail']=true;
		}
		me._tooltip_btn_thumbnail.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me.elementMouseOver['tooltip_btn_thumbnail']=false;
		}
		me._tooltip_btn_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._tooltip_btn_thumbnail);
		me.divSkin.appendChild(me._thumbnail);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 14px;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseenter=function (e) {
			me._tooltip_btn_fullscreen.style.transition='none';
			me._tooltip_btn_fullscreen.style.visibility=(Number(me._tooltip_btn_fullscreen.style.opacity)>0||!me._tooltip_btn_fullscreen.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_fullscreen.ggVisible=true;
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_fullscreen']=true;
		}
		me._button_fullscreen.onmouseleave=function (e) {
			me._tooltip_btn_fullscreen.style.transition='none';
			me._tooltip_btn_fullscreen.style.visibility='hidden';
			me._tooltip_btn_fullscreen.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_fullscreen']=false;
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzMi4xIiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1IiB4PSItMjA2LjIiIGZpbGw9IiMxMzI5NTkiIHk9IjM5NyIgaGVpZ2h0PSIyMi4yIi8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4y'+
			'di0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQuMiAgICBoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43ICAgIGMwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40ICAgIGMwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44Yz'+
			'AsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkgICAgQy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiAgICBjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEs'+
			'MC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSAgICBjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYgICAgQy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41ICAgIEMtMTY4Lj'+
			'YsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzNS43IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1IiB4PSItMjA5LjYiIGZpbGw9IiMxMzI5NTkiIHk9IjM5NyIgaGVpZ2h0PSIyNC42Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCAgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0y'+
			'LjEtNC43LTQuN3YtMjcuMiAgICBjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSAgICBsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkgICAgbDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45Yz'+
			'AuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40ICAgIGwxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGw9IiMxMzI5NTkiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEgICAgYy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQt'+
			'MC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSAgICBjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQgICAgQy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiAgICBDLTE2Ny45LDM5My4xLTE3MCwzOT'+
			'EtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYgICAgYy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40ICAgIGMtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIu'+
			'N2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkgICAgQy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGw9IiMyNzI3MjciLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0Lj'+
			'cgICAgYzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGw9IiMyNzI3MjciLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42ICAgYy0wLjEsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQgICBjMC4yLDAuMywwLjQsMC40LDAu'+
			'OSwwLjNjMC40LDAsMC43LTAuMywwLjgtMC42bDUuMi0xNS40Qy0xNDcuMiwzNzguNC0xNDcuMiwzNzguMS0xNDcuNCwzNzcuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTE0Mi43LDQyNC42aC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjdjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjQ2LjcgICBDLTEzOC40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiAgICBjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSAgICBjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4x'+
			'Yy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSAgICBDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsPSIjMjcyNzI3Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgIFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS'+
			'44ICAgIGMyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsPSIjMjcyNzI3Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjIgICBjLTAuMSwwLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYgICBjMC4yLDAuMywwLjUsMC40LDEsMC40'+
			'YzAuNSwwLDAuNy0wLjMsMC44LTAuN2w1LjgtMTcuMUMtMTQ0LjEsMzc2LjMtMTQ0LjEsMzc2LTE0NC4zLDM3NS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTM5LjEsNDI3LjZoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOGMyLjYsMCw0LjcsMi4xLDQuNyw0Ljd2NTEuOCAgIEMtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tooltip_btn_fullscreen=document.createElement('div');
		els=me._tooltip_btn_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 33px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 24px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._("Full Screen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_fullscreen.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me.elementMouseOver['tooltip_btn_fullscreen']=true;
		}
		me._tooltip_btn_fullscreen.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me.elementMouseOver['tooltip_btn_fullscreen']=false;
		}
		me._tooltip_btn_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._tooltip_btn_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 32px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onmouseenter=function (e) {
			me._tooltip_btn_autorotate.style.transition='none';
			me._tooltip_btn_autorotate.style.visibility=(Number(me._tooltip_btn_autorotate.style.opacity)>0||!me._tooltip_btn_autorotate.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_autorotate.ggVisible=true;
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_auto_rotate']=true;
		}
		me._button_auto_rotate.onmouseleave=function (e) {
			me._tooltip_btn_autorotate.style.transition='none';
			me._tooltip_btn_autorotate.style.visibility='hidden';
			me._tooltip_btn_autorotate.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_auto_rotate']=false;
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTk2LjEsMzcwLjRjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGM3LjcsMCwxNC45LDIuNiwyMC42LDdsLTYuNCw2LjRjLTQtMi44LTguOS00LjQtMTQuMi00LjRjLTUuOCwwLTExLjEsMi0xNS4zLDUuMyAgIGMtMC42LDAuNS0xLjQsMC40LTItMC4yYy0wLjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEt'+
			'MTk2LjEsMzcwLjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcgICBjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMgICBjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNmMwLDUuMiwxLjcsMTAuMSw0LjUsMTQuMWwtNi40LDYuNGMtNC40LTUuNy03LTEyLjgtNy4xLTIwLjVoLTAuNUgtMjE3LjJ6IE0tMjA3LjIsNDMyLjMgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LD'+
			'AtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43ICAgYzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40ICAgYy03LjcsMC0xNC44LTIuNi0yMC41LTYuOWw2LjQtNi40YzQsMi43LDguOCw0LjMsMTQsNC4zYzUuOCwwLDExLjEtMiwxNS4zLTUuM2MwLjYtMC41LDEuNC0wLjQsMiwwLjJjMC41LDAuNSwzLjEsMy41LDQsNC40ICAgQy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0x'+
			'NDQuNSw0MTYuOWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCAgIGMtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43ICAgYzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQyLjgsMzYxLjdjMC40LDAsMC44LDAuMSwxLjEsMC'+
			'40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjQgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0xNDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCAgICBjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIx'+
			'LjEsNy40Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiAgICBoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICAgQy0xMzEuNS'+
			'wzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcgICAgYzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyAgICBjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6IiBmaWxsPSIj'+
			'RkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTU3LjcsNDE2LjZjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40ICAgIGM1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTE5OC41LDM2Ny41YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJjOC42LDAsMTYuNSwyLjksMjIuOSw3LjhsLTcuMiw3LjJjLTQuNS0zLjEtOS45LTQuOS0xNS43LTQuOWMtNi40LDAtMTIuMywyLjItMTcsNS45ICAgYy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2'+
			'OS4yLTE5OS4zLDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43ICAgYy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUgICBjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjVoLTAuN2MwLjEsNS44LDEuOSwxMS4yLDUsMTUuNmwtNy4xLDcuMWMtNC45LTYuMy03LjgtMTQuMi03LjktMjIuOGgtMC42SC0yMjEuOXogTS0yMTAuNyw0MzYuMyAgIGMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS'+
			'44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44ICAgYzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiAgIGMtOC41LDAtMTYuNC0yLjktMjIuOC03LjdsNy4yLTcuMmM0LjQsMyw5LjgsNC44LDE1LjYsNC44YzYuNCwwLDEyLjMtMi4yLDE3LTUuOWMwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOSAgIEMtMTUwLjcs'+
			'NDI0LjUtMTUwLjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCAgIGMtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYgICBjMC41LDAsMC45LDAuMiwxLjIsMC43YzAuMywwLjUsMC4yLDEuMS0wLjEsMS41TC0xNDEuMSw0MTkuMXoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cG'+
			'F0aCBkPSJNLTEzOS4zLDM1Ny43YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSAgIHMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjIg'+
			'ICAgYy02LjQtNC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yICAgIGMzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNi'+
			'wwLjYsMS4xLDAuNiAgICBjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyAgICBjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwx'+
			'LTAuMSwxLjUgICAgYzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNkgtMjEyLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjIgICAgYzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style.transition='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.logicBlock_visible();
		me._stop_rotate_image.onclick=function (e) {
			player.stopAutorotate();
		}
		me._stop_rotate_image.onmouseenter=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['stop_rotate_image']=true;
		}
		me._stop_rotate_image.onmouseleave=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNTMuOSw0MjMuNmMtNS44LDQuNi0xMy4xLDcuNC0yMS4xLDcuNGgwYy0xOC43LDAtMzQtMTUuMi0zNC0zNGgtMC41aC03LjdjLTAuNSwwLTAuOC0wLjItMS4xLTAuN2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zICAgbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4x'+
			'LDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43ICAgYzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnogICAgTS0xNzksMzk3YzAtMi4yLDEuOC00LDQtNGMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Qy0xNzcuMiw0MDEtMTc5LDM5OS4yLTE3OSwzOTd6IE0tMTQ0LjUsNDE2LjkgICBjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcgICBjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMgICBjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGgwYzE4LjcsMCwzNCwxNS4yLDM0LDM0aDAuNWg3LjdjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1IiBmaWxsPSIjMjcyNzI3Ii8+CiA8L2c+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNTMuNyw0MjEuM2MtMC44LTAuOS0zLjUtMy45LTQtNC40Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2gwICAgYy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42ICAgYy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNC'+
			'wzNCwzNGgwICAgYzgsMCwxNS4zLTIuOCwyMS4xLTcuNEMtMTUzLjIsNDIzLjEtMTUzLjEsNDIyLTE1My43LDQyMS4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTE4LjctMTUuMi0zNC0zNC0zNGgwYy04LDAtMTUuMywyLjgtMjEuMSw3LjQgICBjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyAgIGgtNy42Yy0wLjUsMC0wLjgs'+
			'MC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICBDLTEzMS41LDM5OC43LTEzMS40LDM5OC4yLTEzMS43LDM5Ny43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxjaXJjbGUgY3g9Ii0xNzUiIGN5PSIzOTciIGZpbGw9IiNGRkZGRkYiIHI9IjQiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNTEuNSw0MjYuNmMtNi40LDUuMS0xNC42LDguMi0yMy41LDguMmgwYy0yMC44LDAtMzcuNy0xNi45LTM3LjctMzcuN2gtMC42aC04LjYgICBjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQuMS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAuNmwxNC4yLDE5LjggICBj'+
			'MC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkgICBjMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjlDLTE1MC43LDQyNC44LTE1MC43LDQyNi0xNTEuNSw0MjYuNnogTS0xNzkuNCwzOTdjMC0yLjQsMi00LjQsNC40LTQuNCAgIGMyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC4zLDAuNC0wLjYsMC42LT'+
			'EuMiwwLjYgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwICAgYy02LjQsMC0xMi4zLDIuMi0xNyw1LjljLTAuNywwLjUtMS42LDAuNC0yLjItMC4yYy0wLjYtMC42LTMuNS0zLjgtNC40LTQuOWMtMC43LTAuOC0wLjYtMiwwLjItMi42YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJoMCAgIGMyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEu'+
			'NUwtMTQxLjEsNDE5LjF6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1IiBmaWxsPSIjMjcyNzI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAgICBjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiAgIGMtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC4xLDE5LjhjLTAuMywwLj'+
			'QtMC40LDEtMC4xLDEuNWMwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZoMC42YzAsMjAuOCwxNi45LDM3LjcsMzcuNywzNy43aDAgICBjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxwYXRoIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjIgICBjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAu'+
			'MmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43ICAgaC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjZjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOCAgIEMtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgY3k9IjM5NyIgZmlsbD0iI0ZGRkZGRiIgcj0iNC40Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style.transition='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.logicBlock_visible();
		me._start_rotate_image.onclick=function (e) {
			player.startAutorotate(0);
		}
		me._start_rotate_image.onmouseenter=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['start_rotate_image']=true;
		}
		me._start_rotate_image.onmouseleave=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		el=me._tooltip_btn_autorotate=document.createElement('div');
		els=me._tooltip_btn_autorotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 34px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 24px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 69px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_autorotate.ggUpdateText=function() {
			var params = [];
			var hs = player._("Play Tour", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_autorotate.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_autorotate.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me.elementMouseOver['tooltip_btn_autorotate']=true;
		}
		me._tooltip_btn_autorotate.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me.elementMouseOver['tooltip_btn_autorotate']=false;
		}
		me._tooltip_btn_autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._tooltip_btn_autorotate);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._button_floorplan=document.createElement('div');
		el.ggId="button_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 14px;';
		hs+='height : 80px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_floorplan.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_floorplan.onclick=function (e) {
			me._mapa_fullscreen_container.ggVisible = !me._mapa_fullscreen_container.ggVisible;
			var flag=me._mapa_fullscreen_container.ggVisible;
			me._mapa_fullscreen_container.style.transition='none';
			me._mapa_fullscreen_container.style.visibility=((flag)&&(Number(me._mapa_fullscreen_container.style.opacity)>0||!me._mapa_fullscreen_container.style.opacity))?'inherit':'hidden';
		}
		me._button_floorplan.onmouseenter=function (e) {
			me._tooltip_btn_floorplan.style.transition='none';
			me._tooltip_btn_floorplan.style.visibility=(Number(me._tooltip_btn_floorplan.style.opacity)>0||!me._tooltip_btn_floorplan.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_floorplan.ggVisible=true;
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['button_floorplan']=true;
		}
		me._button_floorplan.onmouseleave=function (e) {
			me._tooltip_btn_floorplan.style.transition='none';
			me._tooltip_btn_floorplan.style.visibility='hidden';
			me._tooltip_btn_floorplan.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['button_floorplan']=false;
		}
		me._button_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_image_floorplan=document.createElement('div');
		els=me._stop_image_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9Ijg4N2YzZTA2MWIiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZmFhZWJjYjE3NSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImEzODYwYTdkM2IiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iN2QxYmM0N2YzNSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIwNDA3YmE4YzYwIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgeD0iMCIgeT0iMCIgaGVpZ2h0PSI3MjQiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoIzg4N2YzZTA2MWIpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZmFhZWJjYjE3NSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMwNDA3YmE4YzYwKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2EzODYwYTdkM2IpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzdkMWJjNDdmMzUpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbD0iIzEzMjk1OSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDE3MjUzNSAxOS41MDE3OSBMIDUxMi4yNTM5ODQgMTkuNTAxNDk3ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wMDA5OTE3NTUsIDAuNzQ5OTk5LCAtMC43NDk5OTksIC0wLjAwMDk5MTc1NSwgNTg4LjE1MzY3LCAyMTMuNzEyMDQxKSIgc3Ryb2tlLWxp'+
			'bmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDA4MzA0NzEgMTkuNDk3ODY1IEwgNTEzLjE4MTQ4NyAxOS40OTc4NjUgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1LCAwLCAwLCAtMC43NSwgNTczLjUyMjgxNSwgNTk4LjI0ODM5OCkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm'+
			'9rZS13aWR0aD0iMzkiIGQ9Ik0gLTAuMDAwODY5MTYgMTkuNDk4ODIgTCAyNzEuNzgwMzk1IDE5LjQ5ODgyMSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAuMDAwMDAwMDAxMzA5LCAtMC4wMDAwMDAwMDEzMDksIC0wLjc1LCAzOTIuNDY4MDk4LCA0MTAuOTUyMjM5KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAwLjAwMDkwNjMzOSAxOS41MDA1NTUgTCAyNTguMjgyMTY5'+
			'IDE5LjUwMDU1NSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDM2Mi45NjA1MjIsIDQwNy40MDMwMjQpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMTgyOTM1IDE5LjQ5NzgzNCBMIDI5Ny4yMjczNTIgMTkuNDk3ODM0ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjc1LCAtMC'+
			'4wMDAwMDAwMDAwMDAwMDAxODYsIDAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjc1LCAzNjQuNDUwNTkxLCAyMTEuNzUxNjI1KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAwLjAwMjQxNzc4IDE5LjQ5OTQ1NSBMIDI1OC4yMTA3NjQgMTkuNDk5NDU1ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMTg4LjQ4ODY5MSwgNTk0LjY2OTc4MikiIHN0cm9rZS1s'+
			'aW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDA3MDU0OTUgMTkuNDk4ODIgTCAxNTAuOTU5MDQ2IDE5LjQ5ODgyICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMC4wMDAwMDAwMDEzMDksIC0wLjAwMDAwMDAwMTMwOSwgLTAuNzUsIDU3My41MjM5NjcsIDQxMC45NTIyMzkpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZW'+
			'pvaW49Im1pdGVyIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMTA4NjgxIDE5LjQ5ODYyOCBMIDE1MC45NjI0NjIgMTkuNDk4NjI4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMzY1LjI0MzIxNywgNTgzLjYyMDI3OSkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iNDAiIGQ9Ik0gMC4wMDIzNjk5OCAyMC4wMDA5NTcgTCA5NjMuMTQzMjUgMjAu'+
			'MDAzMTI1ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC42MTg5MjEsIDAuNDIzNTk5LCAtMC40MjM1OTksIC0wLjYxODkyMSwgNzE5LjExMDU3NSwgMjI0LjUzODE3MikiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KPC9zdmc+Cg==';
		me._stop_image_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_image_floorplan__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImUyZWMxZjg3ZWEiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iYzYwMmNiYjRhNSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImNhY2MzNGVjZTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iN2I3ZDMyYzM3MSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIxMTMyYWI5MjQxIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgeD0iMCIgeT0iMCIgaGVpZ2h0PSI3MjQiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoI2UyZWMxZjg3ZWEpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjYzYwMmNiYjRhNSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMxMTMyYWI5MjQxKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NhY2MzNGVjZTQpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzdiN2QzMmMzNzEpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbD0iIzEzMjk1OSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDE3MjUzNSAxOS41MDE3OSBMIDUxMi4yNTM5ODQgMTkuNTAxNDk3ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wMDA5OTE3NTUsIDAuNzQ5OTk5LCAtMC43NDk5OTksIC0wLjAwMDk5MTc1NSwgNTg4LjE1MzY3LCAyMTMuNzEyMDQxKSIgc3Ryb2tlLWxp'+
			'bmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDA4MzA0NzEgMTkuNDk3ODY1IEwgNTEzLjE4MTQ4NyAxOS40OTc4NjUgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1LCAwLCAwLCAtMC43NSwgNTczLjUyMjgxNSwgNTk4LjI0ODM5OCkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm'+
			'9rZS13aWR0aD0iMzkiIGQ9Ik0gLTAuMDAwODY5MTYgMTkuNDk4ODIgTCAyNzEuNzgwMzk1IDE5LjQ5ODgyMSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAuMDAwMDAwMDAxMzA5LCAtMC4wMDAwMDAwMDEzMDksIC0wLjc1LCAzOTIuNDY4MDk4LCA0MTAuOTUyMjM5KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAwLjAwMDkwNjMzOSAxOS41MDA1NTUgTCAyNTguMjgyMTY5'+
			'IDE5LjUwMDU1NSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDM2Mi45NjA1MjIsIDQwNy40MDMwMjQpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMTgyOTM1IDE5LjQ5NzgzNCBMIDI5Ny4yMjczNTIgMTkuNDk3ODM0ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjc1LCAtMC'+
			'4wMDAwMDAwMDAwMDAwMDAxODYsIDAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjc1LCAzNjQuNDUwNTkxLCAyMTEuNzUxNjI1KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAwLjAwMjQxNzc4IDE5LjQ5OTQ1NSBMIDI1OC4yMTA3NjQgMTkuNDk5NDU1ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMTg4LjQ4ODY5MSwgNTk0LjY2OTc4MikiIHN0cm9rZS1s'+
			'aW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDA3MDU0OTUgMTkuNDk4ODIgTCAxNTAuOTU5MDQ2IDE5LjQ5ODgyICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMC4wMDAwMDAwMDEzMDksIC0wLjAwMDAwMDAwMTMwOSwgLTAuNzUsIDU3My41MjM5NjcsIDQxMC45NTIyMzkpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZW'+
			'pvaW49Im1pdGVyIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMTA4NjgxIDE5LjQ5ODYyOCBMIDE1MC45NjI0NjIgMTkuNDk4NjI4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMzY1LjI0MzIxNywgNTgzLjYyMDI3OSkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzAiIGQ9Ik0gMC4wMDIzODEwMyAxNS4wMDA5MzIgTCA5NjMuMTQzMjYxIDE1'+
			'LjAwMzEgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjYxODkyMSwgMC40MjM1OTksIC0wLjQyMzU5OSwgLTAuNjE4OTIxLCA3MTYuOTkyNTc1LCAyMjEuNDQzNTQ1KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgo8L3N2Zz4K';
		me._stop_image_floorplan__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stop_image_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_image_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_image_floorplan.onclick=function (e) {
			me._stop_image_floorplan.style.transition='none';
			me._stop_image_floorplan.style.visibility='hidden';
			me._stop_image_floorplan.ggVisible=false;
			me._start_image_floorplan.style.transition='none';
			me._start_image_floorplan.style.visibility=(Number(me._start_image_floorplan.style.opacity)>0||!me._start_image_floorplan.style.opacity)?'inherit':'hidden';
			me._start_image_floorplan.ggVisible=true;
		}
		me._stop_image_floorplan.onmouseenter=function (e) {
			me._stop_image_floorplan__img.style.visibility='hidden';
			me._stop_image_floorplan__imgo.style.visibility='inherit';
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['stop_image_floorplan']=true;
		}
		me._stop_image_floorplan.onmouseleave=function (e) {
			me._stop_image_floorplan__img.style.visibility='inherit';
			me._stop_image_floorplan__imgo.style.visibility='hidden';
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['stop_image_floorplan']=false;
		}
		me._stop_image_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._button_floorplan.appendChild(me._stop_image_floorplan);
		el=me._start_image_floorplan=document.createElement('div');
		els=me._start_image_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjdlYmQyNzFlZWUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iNjZhZGQ2M2VmMCI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImUwMjlkZGY2NTMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iYzUxOWRhYjE0MCI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJhN2UzMTg1NWZiIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgeD0iMCIgeT0iMCIgaGVpZ2h0PSI3MjQiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoIzdlYmQyNzFlZWUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNjZhZGQ2M2VmMCkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhN2UzMTg1NWZiKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2UwMjlkZGY2NTMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2M1MTlkYWIxNDApIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbD0iIzI3MjcyNyIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDE3MzExIDE5LjQ5NzQzNyBMIDUxMi4yNTM5ODUgMTkuNTAyMzUzICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wMDA5OTE3NTUsIDAuNzQ5OTk5LCAtMC43NDk5OTksIC0wLjAwMDk5MTc1NSwgNjA0LjgzMDA5MywgMjEzLjcxMjA0MSkiIHN0cm9rZS1s'+
			'aW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDAwMjU0MTA1IDE5LjQ5Nzg2NSBMIDUxMy4xODIzNDMgMTkuNDk3ODY1ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMCwgMCwgLTAuNzUsIDU5MC4xOTkyMzgsIDU5OC4yNDgzOTgpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiA8cGF0aCBzdH'+
			'Jva2Utd2lkdGg9IjM5IiBkPSJNIDAuMDAwMDc5NTIxMyAxOS40OTg4MiBMIDI3MS43ODEzNDMgMTkuNDk4ODIxICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMC4wMDAwMDAwMDEzMDksIC0wLjAwMDAwMDAwMTMwOSwgLTAuNzUsIDQwOS4xNDQ1OTEsIDQxMC45NTIyMzkpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIDAuMDAwOTA2MzM5IDE5LjQ5OTYxOSBMIDI1OC4yODIx'+
			'NjkgMTkuNDk5NjE5ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMzc5LjYzNzAwNSwgNDA3LjQwMzAyNCkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDI0NDMxIDE5LjQ5NzgzNCBMIDI5Ny4yMjY0MTYgMTkuNDk3ODM0ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjc1LCAtMC'+
			'4wMDAwMDAwMDAwMDAwMDAxODYsIDAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjc1LCAzODEuMTI3MDc0LCAyMTEuNzUxNjI1KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAwLjAwMjQxNzc4IDE5LjQ5ODU1NyBMIDI1OC4yMTA3NjQgMTkuNDk4NTU3ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMjA1LjE2NTE0NSwgNTk0LjY2OTc4MikiIHN0cm9rZS1s'+
			'aW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDE2NTczOCAxOS40OTg4MiBMIDE1MC45NTk5OTggMTkuNDk4ODIgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1LCAwLjAwMDAwMDAwMTMwOSwgLTAuMDAwMDAwMDAxMzA5LCAtMC43NSwgNTkwLjIwMDQ2MiwgNDEwLjk1MjIzOSkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam'+
			'9pbj0ibWl0ZXIiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gLTAuMDAxMDg2ODEgMTkuNDk3NzMxIEwgMTUwLjk2MjQ2MiAxOS40OTc3MzEgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjc1LCAwLjc1LCAwLCAzODEuOTE5NjcxLCA1ODMuNjIwMjc5KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgo8L3N2Zz4K';
		me._start_image_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_image_floorplan__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgODEwIDgwOS45OTk5OTMiIHdpZHRoPSIxMDgwIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMTA4MCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9Ijk1ZjIxZmIwYzAiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NjQwNjIgMC42NjQwNjIgTCA3NzkuMzM1OTM4IDAuNjY0MDYyIEwgNzc5LjMzNTkzOCA3Nz'+
			'kuMzM1OTM4IEwgMC42NjQwNjIgNzc5LjMzNTkzOCBaIE0gMC42NjQwNjIgMC42NjQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImZhMWE4ZTk3ZTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzkwIDAuNjY0MDYyIEMgMTc0Ljk3NjU2MiAwLjY2NDA2MiAwLjY2NDA2MiAxNzQuOTc2NTYyIDAuNjY0MDYyIDM5MCBDIDAuNjY0MDYyIDYwNS4wMjM0MzggMTc0Ljk3NjU2MiA3NzkuMzM1OTM4IDM5MCA3NzkuMzM1OTM4IEMgNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDc3OS4zMzU5MzggNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDM5MCBDIDc3OS4zMzU5MzggMTc0'+
			'Ljk3NjU2MiA2MDUuMDIzNDM4IDAuNjY0MDYyIDM5MCAwLjY2NDA2MiBaIE0gMzkwIDAuNjY0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0MWFlOTZhN2JjIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNjY0MDYyIDAuNjY0MDYyIEwgNzc5LjMzNTkzOCAwLjY2NDA2MiBMIDc3OS4zMzU5MzggNzc5LjMzNTkzOCBMIDAuNjY0MDYyIDc3OS4zMzU5MzggWiBNIDAuNjY0MDYyIDAuNjY0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJlZDJjNmVkMDE1Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM5MCAwLjY2ND'+
			'A2MiBDIDE3NC45NzY1NjIgMC42NjQwNjIgMC42NjQwNjIgMTc0Ljk3NjU2MiAwLjY2NDA2MiAzOTAgQyAwLjY2NDA2MiA2MDUuMDIzNDM4IDE3NC45NzY1NjIgNzc5LjMzNTkzOCAzOTAgNzc5LjMzNTkzOCBDIDYwNS4wMjM0MzggNzc5LjMzNTkzOCA3NzkuMzM1OTM4IDYwNS4wMjM0MzggNzc5LjMzNTkzOCAzOTAgQyA3NzkuMzM1OTM4IDE3NC45NzY1NjIgNjA1LjAyMzQzOCAwLjY2NDA2MiAzOTAgMC42NjQwNjIgWiBNIDM5MCAwLjY2NDA2MiAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iMDI2NzQ4MzY3NSI+CiAgIDxyZWN0IHdpZHRoPSI3ODAiIHg9IjAiIHk9IjAiIGhlaWdo'+
			'dD0iNzgwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9Ijg1ZmY5Y2JhM2MiPgogICA8cmVjdCB3aWR0aD0iNzgwIiB4PSIwIiB5PSIwIiBoZWlnaHQ9Ijc4MCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAxNSwgMTUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjODVmZjljYmEzYykiPgogICA8ZyBjbGlwLXBhdGg9InVybCgjOTVmMjFmYjBjMCkiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2ZhMWE4ZTk3ZTcpIj4KICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtMC4wMDAwMDAwMDAwMDAwMDE3NzYsID'+
			'AuMDAwMDAwMDAwMDAwMDM5MDgpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzAyNjc0ODM2NzUpIj4KICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCM0MWFlOTZhN2JjKSI+CiAgICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2VkMmM2ZWQwMTUpIj4KICAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNjY0MDYyIDAuNjY0MDYyIEwgNzc5LjMzNTkzOCAwLjY2NDA2MiBMIDc3OS4zMzU5MzggNzc5LjMzNTkzOCBMIDAuNjY0MDYyIDc3OS4zMzU5MzggWiBNIDAuNjY0MDYyIDAuNjY0MDYyICIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZmlsbD0iIzI3MjcyNyIvPgogICAg'+
			'ICAgIDwvZz4KICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogICA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMTcyODk1IDE5LjUwMjMzMSBMIDUxMi4yNTI4NjkgMTkuNTAxNjk4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wMDEwNjg1OCwgMC44MDgxLCAtMC44MDgxLCAtMC4wMDEwNjg1OCwgNjA1LjMxMDYyLCAxODMuODkzMzMxKSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlci'+
			'IvPgogICA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMDY5MDQwMSAxOS41MDAxMzkgTCA1MTMuMTgxNTM4IDE5LjUwMDEzOSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODA4MTAxLCAwLCAwLCAtMC44MDgxMDEsIDU4OS41NDYzMTcsIDU5OC4yMTkwMjEpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDEwMzE0NiAxOS40OTg5OTEgTCAyNzEuNzgwMTQz'+
			'IDE5LjQ5ODk5MiAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODA4MTAxLCAwLjAwMDAwMDAwMTQxMDQsIC0wLjAwMDAwMDAwMTQxMDQsIC0wLjgwODEwMSwgMzk0LjQ2NTY3NywgMzk2LjQxMzQwNykiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIzOSIgZD0iTSAtMC4wMDA3OTgyMzYgMTkuNDk5NDIyIEwgMjU4LjI4MjE2OCAxOS40OTk0MjIgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW'+
			'1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjgwODEwMSwgMC44MDgxMDEsIDAsIDM2Mi42NzIxODMsIDM5Mi41ODkxOTkpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gLTAuMDAwNDE1NjI4IDE5LjUwMDA0NSBMIDI5Ny4yMjg5ODUgMTkuNTAwMDQ1ICIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwODEwMSwgLTAuMDAwMDAwMDAwMDAwMDAwMiwgMC4wMDAw'+
			'MDAwMDAwMDAwMDAyLCAwLjgwODEwMSwgMzY0LjI3NzY4LCAxODEuNzgxMDU1KSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPgogICA8cGF0aCBzdHJva2Utd2lkdGg9IjM5IiBkPSJNIC0wLjAwMDA5MzkzMTYgMTkuNDk4OTE2IEwgMjU4LjIxMDM2NCAxOS40OTg5MTYgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjgwODEwMSwgMC44MDgxMDEsIDAsIDE3NC42ODQzMTEsIDU5NC4zNjMyMDUpIiBzdHJva2UtbGluZWNhcD0iYnV0dC'+
			'Igc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+CiAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDA5MTMzMjQgMTkuNDk4OTkxIEwgMTUwLjk2MjQ1NCAxOS40OTg5OTIgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjgwODEwMSwgMC4wMDAwMDAwMDE0MTA0LCAtMC4wMDAwMDAwMDE0MTA0LCAtMC44MDgxMDEsIDU4OS41NDc2MTMsIDM5Ni40MTM0MDcpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBzdHJva2UtbGlu'+
			'ZWpvaW49Im1pdGVyIi8+CiAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMzkiIGQ9Ik0gMC4wMDA4NDk3NjEgMTkuNTAxMTI5IEwgMTUwLjk2MjM5IDE5LjUwMTEyOSAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuODA4MTAxLCAwLjgwODEwMSwgMCwgMzY1LjEzMTc0MSwgNTgyLjQ1NzcxOCkiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._start_image_floorplan__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="start_image_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_image_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_image_floorplan.onclick=function (e) {
			me._start_image_floorplan.style.transition='none';
			me._start_image_floorplan.style.visibility='hidden';
			me._start_image_floorplan.ggVisible=false;
			me._stop_image_floorplan.style.transition='none';
			me._stop_image_floorplan.style.visibility=(Number(me._stop_image_floorplan.style.opacity)>0||!me._stop_image_floorplan.style.opacity)?'inherit':'hidden';
			me._stop_image_floorplan.ggVisible=true;
		}
		me._start_image_floorplan.onmouseenter=function (e) {
			me._start_image_floorplan__img.style.visibility='hidden';
			me._start_image_floorplan__imgo.style.visibility='inherit';
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['start_image_floorplan']=true;
		}
		me._start_image_floorplan.onmouseleave=function (e) {
			me._start_image_floorplan__img.style.visibility='inherit';
			me._start_image_floorplan__imgo.style.visibility='hidden';
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['start_image_floorplan']=false;
		}
		me._start_image_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._button_floorplan.appendChild(me._start_image_floorplan);
		el=me._tooltip_btn_floorplan=document.createElement('div');
		els=me._tooltip_btn_floorplan__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 33px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 24px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_floorplan.ggUpdateText=function() {
			var params = [];
			var hs = player._("Floor Plan", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_floorplan.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_floorplan.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['tooltip_btn_floorplan']=true;
		}
		me._tooltip_btn_floorplan.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['tooltip_btn_floorplan']=false;
		}
		me._tooltip_btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._button_floorplan.appendChild(me._tooltip_btn_floorplan);
		me.divSkin.appendChild(me._button_floorplan);
		el=me._sound_on_off=document.createElement('div');
		el.ggId="sound_on_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 32px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_off.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sound_on_off.onmouseenter=function (e) {
			me._sound_volume.style.transition='none';
			me._sound_volume.style.visibility=(Number(me._sound_volume.style.opacity)>0||!me._sound_volume.style.opacity)?'inherit':'hidden';
			me._sound_volume.ggVisible=true;
			me._tooltip_btn_sound.style.transition='none';
			me._tooltip_btn_sound.style.visibility=(Number(me._tooltip_btn_sound.style.opacity)>0||!me._tooltip_btn_sound.style.opacity)?'inherit':'hidden';
			me._tooltip_btn_sound.ggVisible=true;
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['sound_on_off']=true;
		}
		me._sound_on_off.onmouseleave=function (e) {
			me._sound_volume.style.transition='none';
			me._sound_volume.style.visibility='hidden';
			me._sound_volume.ggVisible=false;
			me._tooltip_btn_sound.style.transition='none';
			me._tooltip_btn_sound.style.visibility='hidden';
			me._tooltip_btn_sound.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['sound_on_off']=false;
		}
		me._sound_on_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYgICBjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJDLTE3Mi4zLDM3MS4xLTE3Mi4zLDQyMi45LTE3Mi4zLDQyMi45eiBN'+
			'LTE1NSwzOTdjMCw0LjctMS42LDkuMy00LjgsMTMuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyAgIGMwLjYtMC42LDEuNi0wLjYsMi4yLDBDLTE1Ni42LDM4Ny43LTE1NSwzOTIuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDAgICBsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmM0LjktNS40LDcuMy0xMi'+
			'4zLDcuMy0xOS4yaDBjMC02LjktMi40LTEzLjgtNy4zLTE5LjJjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjctMS43ICAgYzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6IiBmaWxsPSIjMjcyNzI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYgICBjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTUxLjhDLTE3Mi4zLDM2OS42LTE3'+
			'My4zLDM2OS0xNzQuNiwzNjkuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDkuOSwzNzRjLTAuNi0wLjYtMS42LTAuNi0yLjEsMGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS42LDAsMi4yYzQuOSw1LjQsNy4zLDEyLjMsNy4zLDE5LjJoMCAgICBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS41LDAuNiwyLjEsMGM1LjktNi41LDguOS0xNC44LDguOS0yM2gwICAgIEMtMTQwLjksMzg4LjctMTQzLjksMzgwLjUtMTQ5LjksMzc0eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2MiwzOD'+
			'RsLTEuNywxLjdjLTAuNiwwLjYtMC42LDEuNCwwLDIuMmMyLjIsMi43LDMuMiw2LDMuMiw5LjJoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjIgICAgYy0wLjYsMC43LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC00LjctMS42LTkuMy00LjgtMTMuMSAgICBDLTE2MC40LDM4My40LTE2MS40LDM4My40LTE2MiwzODR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4xLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43ICAgaDE2bDI4LjEtMTkuNmMxLjQtMSwyLjYtMC40LDIuNiwxLjNDLTE3MiwzNjguMi0xNzIsNDI1LjgtMTcyLDQyNS44eiBNLTE1Mi43'+
			'LDM5N2MwLDUuMi0xLjgsMTAuNC01LjMsMTQuNWMtMC43LDAuNi0xLjgsMC42LTIuNCwwICAgbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44ICAgYzAuNi0wLjYsMS44LTAuNiwyLjQsMEMtMTU0LjUsMzg2LjYtMTUyLjcsMzkxLjgtMTUyLjcsMzk3TC0xNTIuNywzOTd6IE0tMTM3LjEsMzk3YzAsOS4yLTMuMywxOC40LTkuOSwyNS42ICAgYy0wLjcsMC42LTEuNywwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNi'+
			'w4LjItMTMuNyw4LjItMjEuM2gwYzAtNy42LTIuNy0xNS4zLTguMi0yMS4zICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIgZmlsbD0iIzI3MjcyNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYgICBjMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUtMTcz'+
			'LjEsMzY1LjktMTc0LjUsMzY2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTQ3LjEsMzcxLjRjLTAuNy0wLjYtMS43LTAuNi0yLjQsMGwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS43LDAsMi40YzUuNCw2LDguMiwxMy43LDguMiwyMS4zaDAgICAgYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOGMwLjcsMC43LDEuNywwLjcsMi40LDBjNi42LTcuMiw5LjktMTYuNCw5LjktMjUuNmgwICAgIEMtMTM3LjEsMzg3LjgtMTQwLjUsMzc4LjYtMTQ3LjEsMzcxLjR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMT'+
			'YwLjUsMzgyLjVsLTEuOCwxLjhjLTAuNywwLjctMC43LDEuNiwwLDIuNGMyLjQsMywzLjYsNi42LDMuNiwxMC4zaDBjMCwzLjYtMS4yLDcuMy0zLjYsMTAuMyAgICBjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNiwwLjYsMS44LDAuNiwyLjQsMGMzLjYtNC4yLDUuMy05LjMsNS4zLTE0LjVoMGMwLTUuMi0xLjgtMTAuNC01LjMtMTQuNSAgICBDLTE1OC43LDM4MS45LTE1OS45LDM4MS45LTE2MC41LDM4Mi41eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sound_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_off.onclick=function (e) {
			player.setVolume("_main",0);
			me._sound_off.style.transition='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
			me._sound_on.style.transition='none';
			me._sound_on.style.visibility=(Number(me._sound_on.style.opacity)>0||!me._sound_on.style.opacity)?'inherit':'hidden';
			me._sound_on.ggVisible=true;
			me._sound_volume.style.transition='none';
			me._sound_volume.style.opacity='0';
			me._sound_volume.style.visibility='hidden';
		}
		me._sound_off.onmouseenter=function (e) {
			me._sound_off__img.style.visibility='hidden';
			me._sound_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_off']=true;
		}
		me._sound_off.onmouseleave=function (e) {
			me._sound_off__img.style.visibility='inherit';
			me._sound_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_off']=false;
		}
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on_off.appendChild(me._sound_off);
		el=me._sound_on=document.createElement('div');
		el.ggId="sound_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on.onclick=function (e) {
			me._sound_on.style.transition='none';
			me._sound_on.style.visibility='hidden';
			me._sound_on.ggVisible=false;
			me._sound_off.style.transition='none';
			me._sound_off.style.visibility=(Number(me._sound_off.style.opacity)>0||!me._sound_off.style.opacity)?'inherit':'hidden';
			me._sound_off.ggVisible=true;
			me._sound_volume.style.transition='none';
			me._sound_volume.style.opacity='1';
			me._sound_volume.style.visibility=me._sound_volume.ggVisible?'inherit':'hidden';
		}
		me._sound_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_on_5=document.createElement('div');
		els=me._sound_on_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("5")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_5.style.transition='';
				if (me._sound_on_5.ggCurrentLogicStateVisible == 0) {
					me._sound_on_5.style.visibility=(Number(me._sound_on_5.style.opacity)>0||!me._sound_on_5.style.opacity)?'inherit':'hidden';
					me._sound_on_5.ggVisible=true;
				}
				else {
					me._sound_on_5.style.visibility="hidden";
					me._sound_on_5.ggVisible=false;
				}
			}
		}
		me._sound_on_5.logicBlock_visible();
		me._sound_on_5.onclick=function (e) {
			player.changeVolume("_main",1);
		}
		me._sound_on_5.onmouseenter=function (e) {
			me._sound_on_5__img.style.visibility='hidden';
			me._sound_on_5__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_5']=true;
		}
		me._sound_on_5.onmouseleave=function (e) {
			me._sound_on_5__img.style.visibility='inherit';
			me._sound_on_5__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_5']=false;
		}
		me._sound_on_5.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_5);
		el=me._sound_on_4=document.createElement('div');
		els=me._sound_on_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("4")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_4.style.transition='';
				if (me._sound_on_4.ggCurrentLogicStateVisible == 0) {
					me._sound_on_4.style.visibility=(Number(me._sound_on_4.style.opacity)>0||!me._sound_on_4.style.opacity)?'inherit':'hidden';
					me._sound_on_4.ggVisible=true;
				}
				else {
					me._sound_on_4.style.visibility="hidden";
					me._sound_on_4.ggVisible=false;
				}
			}
		}
		me._sound_on_4.logicBlock_visible();
		me._sound_on_4.onclick=function (e) {
			player.changeVolume("_main",0.8);
		}
		me._sound_on_4.onmouseenter=function (e) {
			me._sound_on_4__img.style.visibility='hidden';
			me._sound_on_4__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_4']=true;
		}
		me._sound_on_4.onmouseleave=function (e) {
			me._sound_on_4__img.style.visibility='inherit';
			me._sound_on_4__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_4']=false;
		}
		me._sound_on_4.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_4);
		el=me._sound_on_3=document.createElement('div');
		els=me._sound_on_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_3.style.transition='';
				if (me._sound_on_3.ggCurrentLogicStateVisible == 0) {
					me._sound_on_3.style.visibility=(Number(me._sound_on_3.style.opacity)>0||!me._sound_on_3.style.opacity)?'inherit':'hidden';
					me._sound_on_3.ggVisible=true;
				}
				else {
					me._sound_on_3.style.visibility="hidden";
					me._sound_on_3.ggVisible=false;
				}
			}
		}
		me._sound_on_3.logicBlock_visible();
		me._sound_on_3.onclick=function (e) {
			player.changeVolume("_main",0.6);
		}
		me._sound_on_3.onmouseenter=function (e) {
			me._sound_on_3__img.style.visibility='hidden';
			me._sound_on_3__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_3']=true;
		}
		me._sound_on_3.onmouseleave=function (e) {
			me._sound_on_3__img.style.visibility='inherit';
			me._sound_on_3__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_3']=false;
		}
		me._sound_on_3.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_3);
		el=me._sound_on_2=document.createElement('div');
		els=me._sound_on_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_2.style.transition='';
				if (me._sound_on_2.ggCurrentLogicStateVisible == 0) {
					me._sound_on_2.style.visibility=(Number(me._sound_on_2.style.opacity)>0||!me._sound_on_2.style.opacity)?'inherit':'hidden';
					me._sound_on_2.ggVisible=true;
				}
				else {
					me._sound_on_2.style.visibility="hidden";
					me._sound_on_2.ggVisible=false;
				}
			}
		}
		me._sound_on_2.logicBlock_visible();
		me._sound_on_2.onclick=function (e) {
			player.changeVolume("_main",0.4);
		}
		me._sound_on_2.onmouseenter=function (e) {
			me._sound_on_2__img.style.visibility='hidden';
			me._sound_on_2__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_2']=true;
		}
		me._sound_on_2.onmouseleave=function (e) {
			me._sound_on_2__img.style.visibility='inherit';
			me._sound_on_2__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_2']=false;
		}
		me._sound_on_2.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_2);
		el=me._sound_on_1=document.createElement('div');
		els=me._sound_on_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_1.style.transition='';
				if (me._sound_on_1.ggCurrentLogicStateVisible == 0) {
					me._sound_on_1.style.visibility=(Number(me._sound_on_1.style.opacity)>0||!me._sound_on_1.style.opacity)?'inherit':'hidden';
					me._sound_on_1.ggVisible=true;
				}
				else {
					me._sound_on_1.style.visibility="hidden";
					me._sound_on_1.ggVisible=false;
				}
			}
		}
		me._sound_on_1.logicBlock_visible();
		me._sound_on_1.onclick=function (e) {
			player.setVolume("_main",0.2);
		}
		me._sound_on_1.onmouseenter=function (e) {
			me._sound_on_1__img.style.visibility='hidden';
			me._sound_on_1__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_1']=true;
		}
		me._sound_on_1.onmouseleave=function (e) {
			me._sound_on_1__img.style.visibility='inherit';
			me._sound_on_1__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_1']=false;
		}
		me._sound_on_1.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_1);
		el=me._sound_on_0=document.createElement('div');
		els=me._sound_on_0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTEyLjQtOC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LT'+
			'EuOC0xMS44LTUuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbD0iIzEzMjk1OSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE0MC4xLDM2'+
			'My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk0LjUsNDEwLjJsMj'+
			'IuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoiIGZpbGw9'+
			'IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0xMy44LTkuNmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi'+
			'0yMS4zaDBjMC02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGw9IiMxMzI5NTkiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIgZmlsbD0iI0ZGRkZGRiIvPg'+
			'ogICA8cGF0aCBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4xLTEuMS04'+
			'LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_on_0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_0.style.transition='';
				if (me._sound_on_0.ggCurrentLogicStateVisible == 0) {
					me._sound_on_0.style.visibility=(Number(me._sound_on_0.style.opacity)>0||!me._sound_on_0.style.opacity)?'inherit':'hidden';
					me._sound_on_0.ggVisible=true;
				}
				else {
					me._sound_on_0.style.visibility="hidden";
					me._sound_on_0.ggVisible=false;
				}
			}
		}
		me._sound_on_0.logicBlock_visible();
		me._sound_on_0.onclick=function (e) {
			player.setVolume("_main",0);
		}
		me._sound_on_0.onmouseenter=function (e) {
			me._sound_on_0__img.style.visibility='hidden';
			me._sound_on_0__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_on_0']=true;
		}
		me._sound_on_0.onmouseleave=function (e) {
			me._sound_on_0__img.style.visibility='inherit';
			me._sound_on_0__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_on_0']=false;
		}
		me._sound_on_0.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_0);
		me._sound_on_off.appendChild(me._sound_on);
		el=me._sound_volume=document.createElement('div');
		el.ggId="sound_volume";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : hidden;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_volume.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_volume.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_up=document.createElement('div');
		els=me._sound_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYgICBjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWNDIyLjl6IE0tMTM2LDM5OS43aC05bDAsOWMwLDAuOC0wLjcsMS41'+
			'LTEuNSwxLjVoLTIuM2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtOWgtOSAgIGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0yLjNjMC0wLjgsMC43LTEuNSwxLjUtMS41aDlsMC05YzAtMC44LDAuNy0xLjUsMS41LTEuNWgyLjNjMC44LDAsMS41LDAuNywxLjUsMS41bDAsOWg5ICAgYzAuOCwwLDEuNSwwLjcsMS41LDEuNXYyLjNDLTEzNC41LDM5OS0xMzUuMiwzOTkuNy0xMzYsMzk5Ljd6IiBmaWxsPSIjMjcyNzI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LDM5NC4zaC05bDAtOWMwLTAuOC0wLjctMS41LTEuNS0xLjVoLTIuM2MtMC44LDAtMS41LD'+
			'AuNy0xLjUsMS41bDAsOWgtOWMtMC44LDAtMS41LDAuNy0xLjUsMS41djIuMyAgICBjMCwwLjgsMC43LDEuNSwxLjUsMS41aDlsMCw5YzAsMC44LDAuNywxLjUsMS41LDEuNWgyLjNjMC44LDAsMS41LTAuNywxLjUtMS41bDAtOWg5YzAuOCwwLDEuNS0wLjcsMS41LTEuNXYtMi4zICAgIEMtMTM0LjUsMzk1LTEzNS4yLDM5NC4zLTEzNiwzOTQuM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYgICAgYzEuMywwLjksMi4z'+
			'LDAuMywyLjMtMS4ydi01MS44Qy0xNzIuMywzNjkuNi0xNzMuMywzNjktMTc0LjYsMzY5Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43ICAgaDE2bDI4LjEtMTkuNmMxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDI1Ljh6IE0tMTMxLjcsNDAwaC0xMGwwLDEwYzAsMC45LTAuOCwx'+
			'LjctMS43LDEuN2gtMi42Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC0xMGgtMTAgICBjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMi42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxMGwwLTEwYzAtMC45LDAuOC0xLjcsMS43LTEuN2gyLjZjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsMTBoMTAgICBjMC45LDAsMS43LDAuOCwxLjcsMS43djIuNkMtMTMwLDM5OS4yLTEzMC44LDQwMC0xMzEuNyw0MDB6IiBmaWxsPSIjMjcyNzI3Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMxLjcsMzk0aC0xMGwwLTEwYzAtMC45LTAuOC0xLjctMS43LTEuN2gtMi42Yy0wLj'+
			'ksMC0xLjcsMC44LTEuNywxLjdsMCwxMGgtMTBjLTAuOSwwLTEuNywwLjgtMS43LDEuNyAgICB2Mi42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxMGwwLDEwYzAsMC45LDAuOCwxLjcsMS43LDEuN2gyLjZjMC45LDAsMS43LTAuOCwxLjctMS43bDAtMTBoMTBjMC45LDAsMS43LTAuOCwxLjctMS43di0yLjYgICAgQy0xMzAsMzk0LjgtMTMwLjgsMzk0LTEzMS43LDM5NHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNiAgICBjMS40'+
			'LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUtMTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_up.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('volume') == Number("5")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sound_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sound_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sound_up.style.transition='opacity 0s';
				if (me._sound_up.ggCurrentLogicStateAlpha == 0) {
					me._sound_up.style.visibility=me._sound_up.ggVisible?'inherit':'hidden';
					me._sound_up.style.opacity=0.5;
				}
				else {
					me._sound_up.style.visibility=me._sound_up.ggVisible?'inherit':'hidden';
					me._sound_up.style.opacity=1;
				}
			}
		}
		me._sound_up.logicBlock_alpha();
		me._sound_up.onclick=function (e) {
			player.changeVolume("_main",0.2);
			player.setVariableValue('volume', player.getVariableValue('volume') + Number("1"));
			player.setVariableValue('volume', Math.min(player.getVariableValue('volume'), Number("5")));
		}
		me._sound_up.onmouseenter=function (e) {
			me._sound_up__img.style.visibility='hidden';
			me._sound_up__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_up']=true;
		}
		me._sound_up.onmouseleave=function (e) {
			me._sound_up__img.style.visibility='inherit';
			me._sound_up__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_up']=false;
		}
		me._sound_up.ggUpdatePosition=function (useTransition) {
		}
		me._sound_volume.appendChild(me._sound_up);
		el=me._sound_down=document.createElement('div');
		els=me._sound_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOCAgIGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWNDIyLjl6IE0tMTM2LjYsMzk5LjdoLTIy'+
			'LjJjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMi4zICAgYzAtMC44LDAuNy0xLjUsMS41LTEuNWgyMi4yYzAuOCwwLDEuNSwwLjcsMS41LDEuNXYyLjNDLTEzNS4xLDM5OS0xMzUuOCwzOTkuNy0xMzYuNiwzOTkuN3oiIGZpbGw9IiMyNzI3MjciLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xMzYuNiwzOTQuM2gtMjIuMmMtMC44LDAtMS41LDAuNy0xLjUsMS41djIuM2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMjIuMmMwLjgsMCwxLjUtMC43LDEuNS0xLjV2LTIuMyAgICBDLTEzNS4xLDM5NS0xMzUuOCwzOTQuMy0xMzYuNiwzOTQuM3oiIGZpbGw9IiNGRkZGRk'+
			'YiLz4KICAgPHBhdGggZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYgICAgYzEuMywwLjksMi4zLDAuMywyLjMtMS4ydi01MS44Qy0xNzIuMywzNjkuNi0xNzMuMywzNjktMTc0LjYsMzY5Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgQy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMjguMS0xOS42aC0xNmMtMC45LDAtMS43LTAuOC0xLjctMS43di0xNy42ICAgYzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjQyNS44eiBNLTEzMi40LDQwMEgt'+
			'MTU3Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTIuNiAgIGMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMjQuN2MwLjksMCwxLjcsMC44LDEuNywxLjd2Mi42Qy0xMzAuNywzOTkuMi0xMzEuNCw0MDAtMTMyLjQsNDAweiIgZmlsbD0iIzI3MjcyNyIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTEzMi40LDM5NEgtMTU3Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2Mi42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gyNC43YzAuOSwwLDEuNy0wLjgsMS43LTEuN3YtMi42ICAgIEMtMTMwLjcsMzk0LjgtMTMxLjQsMzk0LTEzMi40LDM5NHoiIGZpbGw9IiNGRkZGRkYiLz4KIC'+
			'AgPHBhdGggZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNiAgICBjMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUtMTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sound_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_down.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('volume') == Number("0")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sound_down.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sound_down.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sound_down.style.transition='opacity 0s';
				if (me._sound_down.ggCurrentLogicStateAlpha == 0) {
					me._sound_down.style.visibility=me._sound_down.ggVisible?'inherit':'hidden';
					me._sound_down.style.opacity=0.5;
				}
				else {
					me._sound_down.style.visibility=me._sound_down.ggVisible?'inherit':'hidden';
					me._sound_down.style.opacity=1;
				}
			}
		}
		me._sound_down.logicBlock_alpha();
		me._sound_down.onclick=function (e) {
			player.changeVolume("_main",-0.2);
			player.setVariableValue('volume', player.getVariableValue('volume') - Number("1"));
			player.setVariableValue('volume', Math.max(player.getVariableValue('volume'), Number("0")));
		}
		me._sound_down.onmouseenter=function (e) {
			me._sound_down__img.style.visibility='hidden';
			me._sound_down__imgo.style.visibility='inherit';
			me.elementMouseOver['sound_down']=true;
		}
		me._sound_down.onmouseleave=function (e) {
			me._sound_down__img.style.visibility='inherit';
			me._sound_down__imgo.style.visibility='hidden';
			me.elementMouseOver['sound_down']=false;
		}
		me._sound_down.ggUpdatePosition=function (useTransition) {
		}
		me._sound_volume.appendChild(me._sound_down);
		me._sound_on_off.appendChild(me._sound_volume);
		el=me._tooltip_btn_sound=document.createElement('div');
		els=me._tooltip_btn_sound__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_btn_sound";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 22px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_btn_sound.ggUpdateText=function() {
			var params = [];
			var hs = player._("Sound", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_btn_sound.ggUpdateText();
		el.appendChild(els);
		me._tooltip_btn_sound.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_btn_sound.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on_off.appendChild(me._tooltip_btn_sound);
		me.divSkin.appendChild(me._sound_on_off);
		el=me._logo_market3r=document.createElement('div');
		el.ggId="Logo Market3r";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 6%;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 9%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo_market3r.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo_market3r.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['logo_market3r']=true;
		}
		me._logo_market3r.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['logo_market3r']=false;
		}
		me._logo_market3r.ggUpdatePosition=function (useTransition) {
		}
		el=me._marketer=document.createElement('div');
		els=me._marketer__img=document.createElement('img');
		els.className='ggskin ggskin_marketer';
		hs=basePath + 'images/marketer.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Marketer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marketer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marketer.onclick=function (e) {
			player.openUrl("https:\/\/market3r.com.br\/","_blank");
		}
		me._marketer.onmouseenter=function (e) {
			me._marketer.style.transition='none';
			me._marketer.ggParameter.sx=1.05;me._marketer.ggParameter.sy=1.05;
			me._marketer.style.transform=parameterToTransform(me._marketer.ggParameter);
			skin.updateSize(me._marketer);
			me.elementMouseOver['marketer']=true;
		}
		me._marketer.onmouseleave=function (e) {
			me._marketer.style.transition='none';
			me._marketer.ggParameter.sx=1;me._marketer.ggParameter.sy=1;
			me._marketer.style.transform=parameterToTransform(me._marketer.ggParameter);
			skin.updateSize(me._marketer);
			me.elementMouseOver['marketer']=false;
		}
		me._marketer.ggUpdatePosition=function (useTransition) {
		}
		me._logo_market3r.appendChild(me._marketer);
		me.divSkin.appendChild(me._logo_market3r);
		el=me._logo_mtc=document.createElement('div');
		el.ggId="Logo MTC";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 55px;';
		hs+='position : absolute;';
		hs+='right : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo_mtc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo_mtc.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['logo_mtc']=true;
		}
		me._logo_mtc.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['logo_mtc']=false;
		}
		me._logo_mtc.ggUpdatePosition=function (useTransition) {
		}
		el=me._mtc=document.createElement('div');
		els=me._mtc__img=document.createElement('img');
		els.className='ggskin ggskin_mtc';
		hs=basePath + 'images/mtc.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="MTC";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mtc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mtc.onclick=function (e) {
			player.openUrl("https:\/\/minastenisclube.com.br\/cultura\/centro-de-memoria\/","_blank");
		}
		me._mtc.onmouseenter=function (e) {
			me._mtc.style.transition='none';
			me._mtc.ggParameter.sx=1.05;me._mtc.ggParameter.sy=1.05;
			me._mtc.style.transform=parameterToTransform(me._mtc.ggParameter);
			skin.updateSize(me._mtc);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['mtc']=true;
		}
		me._mtc.onmouseleave=function (e) {
			me._mtc.style.transition='none';
			me._mtc.ggParameter.sx=1;me._mtc.ggParameter.sy=1;
			me._mtc.style.transform=parameterToTransform(me._mtc.ggParameter);
			skin.updateSize(me._mtc);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['mtc']=false;
		}
		me._mtc.ggUpdatePosition=function (useTransition) {
		}
		me._logo_mtc.appendChild(me._mtc);
		me.divSkin.appendChild(me._logo_mtc);
		el=me._thumbnail_menu_code=document.createElement('div');
		el.ggId="thumbnail_menu_code";
		el.ggDx=-270;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='bottom : 460px;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 270px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 305);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHgyPSI4IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjQiIHgyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjciIHgyPSI5IiB5MT0iOSIgeDE9IjI3IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjciIHgyPSIyNyIgeTE9IjkiIHgxPSI5IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._screentint_phone.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -82.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 165px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._screentint_phone.appendChild(me._thumbnail_scroller_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._mapa_fullscreen_container=document.createElement('div');
		el.ggId="Mapa_fullscreen_container";
		el.ggDx=26;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 26px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mapa_fullscreen_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mapa_fullscreen_container.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['mapa_fullscreen_container']=true;
		}
		me._mapa_fullscreen_container.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['mapa_fullscreen_container']=false;
		}
		me._mapa_fullscreen_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(163,163,163,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 62.0833%;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 1024)) && 
				((player.getViewerSize(true).width / player.getViewerSize(true).height > 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize(true).width < 605))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_2.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_2.ggCurrentLogicStatePosition == 0) {
					me._rectangle_2.style.right='76px';
					me._rectangle_2.style.top='45px';
				}
				else if (me._rectangle_2.ggCurrentLogicStatePosition == 1) {
					me._rectangle_2.style.right='120px';
					me._rectangle_2.style.top='225px';
				}
				else {
					me._rectangle_2.style.right='25px';
					me._rectangle_2.style.top='-2px';
				}
			}
		}
		me._rectangle_2.logicBlock_position();
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024)) && 
				((player.getViewerSize(true).width / player.getViewerSize(true).height > 1))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width < 605))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='44%';
					me._rectangle_2.style.height='80%';
					skin.updateSize(me._rectangle_2);
				}
				else if (me._rectangle_2.ggCurrentLogicStateSize == 1) {
					me._rectangle_2.style.width='70%';
					me._rectangle_2.style.height='50%';
					skin.updateSize(me._rectangle_2);
				}
				else {
					me._rectangle_2.style.width='60%';
					me._rectangle_2.style.height='62.0833%';
					skin.updateSize(me._rectangle_2);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 17px;';
		hs+='height : 90.93%;';
		hs+='left : calc(50% - ((92.84% + 0px) / 2) + 1px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 92.84%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggMap.invalidateSize(false);
			}
		}
		me._rectangle_2.appendChild(me._map_1);
		me._mapa_fullscreen_container.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._mapa_fullscreen_container);
		el=me._btn_menu_open=document.createElement('div');
		els=me._btn_menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_btn_menu_open';
		hs=basePath + 'images/btn_menu_open.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Btn_Menu_Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_menu_open.onclick=function (e) {
			me._btn_menu_open.style.transition='none';
			me._btn_menu_open.style.visibility='hidden';
			me._btn_menu_open.ggVisible=false;
			me._btn_menu_fechar.style.transition='none';
			me._btn_menu_fechar.style.visibility=(Number(me._btn_menu_fechar.style.opacity)>0||!me._btn_menu_fechar.style.opacity)?'inherit':'hidden';
			me._btn_menu_fechar.ggVisible=true;
			me._mainmenu.style.transition='none';
			me._mainmenu.style.visibility=(Number(me._mainmenu.style.opacity)>0||!me._mainmenu.style.opacity)?'inherit':'hidden';
			me._mainmenu.ggVisible=true;
			me._dropdown_menu_f1.style.transition='none';
			me._dropdown_menu_f1.style.visibility=(Number(me._dropdown_menu_f1.style.opacity)>0||!me._dropdown_menu_f1.style.opacity)?'inherit':'hidden';
			me._dropdown_menu_f1.ggVisible=true;
		}
		me._btn_menu_open.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['btn_menu_open']=true;
		}
		me._btn_menu_open.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['btn_menu_open']=false;
		}
		me._btn_menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_menu_open);
		el=me._intro_screen=document.createElement('div');
		el.ggId="Intro_screen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9998;';
		hs+='height : 150%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((150% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._intro_screen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._intro_screen.onclick=function (e) {
			me._intro_screen.style.transition='none';
			me._intro_screen.style.visibility='hidden';
			me._intro_screen.ggVisible=false;
			me._intro_screen.style['display']='none';
			var p = me._intro_screen.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}
		me._intro_screen.onmouseenter=function (e) {
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['intro_screen']=true;
		}
		me._intro_screen.onmouseleave=function (e) {
			me.elementMouseOver['intro_screen']=false;
		}
		me._intro_screen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=-10;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 150.972%;';
		hs+='left : calc(50% - ((151% + 0px) / 2) - 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((150.972% + 0px) / 2) + 60px);';
		hs+='visibility : inherit;';
		hs+='width : 151%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._image_5);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=35;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(5,12,26,0.784314);';
		hs+='border : 1px solid #272727;';
		hs+='height : 150%;';
		hs+='left : calc(50% - ((150% + 2px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((150% + 2px) / 2) + 18px);';
		hs+='visibility : inherit;';
		hs+='width : 150%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._rectangle_1);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=-89;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((96px + 0px) / 2) - 89px);';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._image_4);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=118;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(39,39,39,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 2.36111%;';
		hs+='left : calc(50% - ((10.59% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((2.36111% + 0px) / 2) + 118px);';
		hs+='visibility : inherit;';
		hs+='width : 10.59%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("START TOUR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._text_1);
		el=me._btn_entrar=document.createElement('div');
		els=me._btn_entrar__img=document.createElement('img');
		els.className='ggskin ggskin_btn_entrar';
		hs=basePath + 'images/btn_entrar.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_entrar";
		el.ggDx=0;
		el.ggDy=72;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65px + 0px) / 2) + 72px);';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_entrar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_entrar.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width < 600))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btn_entrar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btn_entrar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btn_entrar.style.transition='transform 0s';
				if (me._btn_entrar.ggCurrentLogicStateScaling == 0) {
					me._btn_entrar.ggParameter.sx = 0.6;
					me._btn_entrar.ggParameter.sy = 0.6;
					me._btn_entrar.style.transform=parameterToTransform(me._btn_entrar.ggParameter);
					skin.updateSize(me._btn_entrar);
				}
				else {
					me._btn_entrar.ggParameter.sx = 1;
					me._btn_entrar.ggParameter.sy = 1;
					me._btn_entrar.style.transform=parameterToTransform(me._btn_entrar.ggParameter);
					skin.updateSize(me._btn_entrar);
				}
			}
		}
		me._btn_entrar.logicBlock_scaling();
		me._btn_entrar.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._image_5.style.transition='none';
			} else {
				me._image_5.style.transition='all 1000ms ease-in 0ms';
			}
			me._image_5.style.opacity='0';
			me._image_5.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._image_4.style.transition='none';
			} else {
				me._image_4.style.transition='all 1000ms ease-in 0ms';
			}
			me._image_4.style.opacity='0';
			me._image_4.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._text_1.style.transition='none';
			} else {
				me._text_1.style.transition='all 1000ms ease-in 0ms';
			}
			me._text_1.style.opacity='0';
			me._text_1.style.visibility='hidden';
		}
		me._btn_entrar.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['btn_entrar']=true;
		}
		me._btn_entrar.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['btn_entrar']=false;
		}
		me._btn_entrar.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._btn_entrar);
		el=me._borda=document.createElement('div');
		els=me._borda__img=document.createElement('img');
		els.className='ggskin ggskin_borda';
		hs=basePath + 'images/borda.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Borda";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15% + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._borda.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._borda.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._borda);
		el=me._letreiro_centro_de_memria=document.createElement('div');
		els=me._letreiro_centro_de_memria__img=document.createElement('img');
		els.className='ggskin ggskin_letreiro_centro_de_memria';
		hs=basePath + 'images/letreiro_centro_de_memria.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Letreiro Centro de Mem\xf3ria";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15.2778%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15.2778% + 0px) / 2) - 6px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._letreiro_centro_de_memria.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._letreiro_centro_de_memria.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._letreiro_centro_de_memria);
		me.divSkin.appendChild(me._intro_screen);
		el=me._mainmenu=document.createElement('div');
		els=me._mainmenu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="MainMenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(19,41,89,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mainmenu.ggUpdateText=function() {
			var params = [];
			var hs = player._("MENU", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mainmenu.ggUpdateText();
		el.appendChild(els);
		me._mainmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mainmenu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mainmenu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mainmenu.ggCurrentLogicStateSize = newLogicStateSize;
				me._mainmenu.style.transition='width 0s, height 0s';
				if (me._mainmenu.ggCurrentLogicStateSize == 0) {
					me._mainmenu.style.width='218px';
					me._mainmenu.style.height='20px';
					skin.updateSize(me._mainmenu);
				}
				else {
					me._mainmenu.style.width='218px';
					me._mainmenu.style.height='20px';
					skin.updateSize(me._mainmenu);
				}
			}
		}
		me._mainmenu.logicBlock_size();
		me._mainmenu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._mainmenu);
		el=me._dropdown_menu_f1=document.createElement('div');
		el.ggId="Dropdown Menu_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 218px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_menu_f1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_menu_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_menu_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_menu_f1.style.transition='width 0s, height 0s';
				if (me._dropdown_menu_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_menu_f1.style.width='218px';
					me._dropdown_menu_f1.style.height='142px';
					skin.updateSize(me._dropdown_menu_f1);
				}
				else {
					me._dropdown_menu_f1.style.width='218px';
					me._dropdown_menu_f1.style.height='142px';
					skin.updateSize(me._dropdown_menu_f1);
				}
			}
		}
		me._dropdown_menu_f1.logicBlock_size();
		me._dropdown_menu_f1.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['dropdown_menu_f1']=true;
		}
		me._dropdown_menu_f1.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['dropdown_menu_f1']=false;
		}
		me._dropdown_menu_f1.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background_f1=document.createElement('div');
		el.ggId="Dropdown Background_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(90,90,90,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_background_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_background_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_background_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_background_f1.style.transition='width 0s, height 0s';
				if (me._dropdown_background_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_background_f1.style.width='218px';
					me._dropdown_background_f1.style.height='120px';
					skin.updateSize(me._dropdown_background_f1);
				}
				else {
					me._dropdown_background_f1.style.width='218px';
					me._dropdown_background_f1.style.height='120px';
					skin.updateSize(me._dropdown_background_f1);
				}
			}
		}
		me._dropdown_background_f1.logicBlock_size();
		me._dropdown_background_f1.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea_f1=document.createElement('div');
		els=me._dropdown_scrollarea_f1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 198px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea_f1.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea_f1.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea_f1.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea_f1.ggScrollPosX = (me._dropdown_scrollarea_f1__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea_f1.ggScrollPosX = Math.max(me._dropdown_scrollarea_f1.ggScrollPosX, 0);
			me._dropdown_scrollarea_f1.ggScrollPosX = Math.min(me._dropdown_scrollarea_f1.ggScrollPosX, me._dropdown_scrollarea_f1__horScrollBg.offsetWidth - me._dropdown_scrollarea_f1__horScrollFg.offsetWidth);
			me._dropdown_scrollarea_f1__horScrollFg.style.left = me._dropdown_scrollarea_f1.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea_f1.ggScrollPosX / (me._dropdown_scrollarea_f1__horScrollBg.offsetWidth - me._dropdown_scrollarea_f1__horScrollFg.offsetWidth);
			me._dropdown_scrollarea_f1__content.style.left = -(Math.round((me._dropdown_scrollarea_f1.ggContentWidth * (1.0 - me._dropdown_scrollarea_f1.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea_f1.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea_f1.ggScrollPosXPercent = (me._dropdown_scrollarea_f1__horScrollFg.offsetLeft / me._dropdown_scrollarea_f1__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea_f1.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea_f1.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea_f1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea_f1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea_f1.ggScrollPosX >= me._dropdown_scrollarea_f1__horScrollBg.offsetWidth - me._dropdown_scrollarea_f1__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea_f1.ggScrollPosX = Math.min(me._dropdown_scrollarea_f1.ggScrollPosX, me._dropdown_scrollarea_f1__horScrollBg.offsetWidth - me._dropdown_scrollarea_f1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea_f1.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea_f1.ggScrollPosX = Math.max(me._dropdown_scrollarea_f1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea_f1__horScrollFg.style.left = me._dropdown_scrollarea_f1.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea_f1.ggScrollPosX / (me._dropdown_scrollarea_f1__horScrollBg.offsetWidth - me._dropdown_scrollarea_f1__horScrollFg.offsetWidth);
			me._dropdown_scrollarea_f1__content.style.left = -(Math.round((me._dropdown_scrollarea_f1.ggContentWidth * (1.0 - me._dropdown_scrollarea_f1.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea_f1.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea_f1.ggScrollPosXPercent = (me._dropdown_scrollarea_f1__horScrollFg.offsetLeft / me._dropdown_scrollarea_f1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea_f1.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea_f1.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea_f1.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea_f1.ggScrollPosY = (me._dropdown_scrollarea_f1__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea_f1.ggScrollPosY = Math.max(me._dropdown_scrollarea_f1.ggScrollPosY, 0);
			me._dropdown_scrollarea_f1.ggScrollPosY = Math.min(me._dropdown_scrollarea_f1.ggScrollPosY, me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight - me._dropdown_scrollarea_f1__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea_f1__vertScrollFg.style.top = me._dropdown_scrollarea_f1.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea_f1.ggScrollPosY / (me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight - me._dropdown_scrollarea_f1__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea_f1__content.style.top = -(Math.round((me._dropdown_scrollarea_f1.ggContentHeight * (1.0 - me._dropdown_scrollarea_f1.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea_f1.ggContentTopOffset + 'px';
			me._dropdown_scrollarea_f1.ggScrollPosYPercent = (me._dropdown_scrollarea_f1__vertScrollFg.offsetTop / me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea_f1.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea_f1.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea_f1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea_f1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea_f1.ggScrollPosY >= me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight - me._dropdown_scrollarea_f1__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea_f1.ggScrollPosY = Math.min(me._dropdown_scrollarea_f1.ggScrollPosY, me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight - me._dropdown_scrollarea_f1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea_f1.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea_f1.ggScrollPosY = Math.max(me._dropdown_scrollarea_f1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea_f1__vertScrollFg.style.top = me._dropdown_scrollarea_f1.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea_f1.ggScrollPosY / (me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight - me._dropdown_scrollarea_f1__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea_f1__content.style.top = -(Math.round((me._dropdown_scrollarea_f1.ggContentHeight * (1.0 - me._dropdown_scrollarea_f1.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea_f1.ggContentTopOffset + 'px';
			me._dropdown_scrollarea_f1.ggScrollPosYPercent = (me._dropdown_scrollarea_f1__vertScrollFg.offsetTop / me._dropdown_scrollarea_f1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea_f1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea_f1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea_f1.ggHPercentVisible);
					me._dropdown_scrollarea_f1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea_f1.clientWidth - (me._dropdown_scrollarea_f1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea_f1.clientWidth - (me._dropdown_scrollarea_f1.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea_f1.ggHPercentVisible);
					me._dropdown_scrollarea_f1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea_f1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea_f1.ggVPercentVisible);
					me._dropdown_scrollarea_f1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea_f1.clientHeight - (me._dropdown_scrollarea_f1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea_f1.clientHeight - (me._dropdown_scrollarea_f1.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea_f1.ggVPercentVisible);
					me._dropdown_scrollarea_f1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._dropdown_scrollarea_f1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._dropdown_scrollarea_f1.ggDragInertiaX *= 0.96;
				me._dropdown_scrollarea_f1.ggDragInertiaY *= 0.96;
				me._dropdown_scrollarea_f1.ggScrollByX(me._dropdown_scrollarea_f1.ggDragInertiaX);
				me._dropdown_scrollarea_f1.ggScrollByY(me._dropdown_scrollarea_f1.ggDragInertiaY);
				if (Math.abs(me._dropdown_scrollarea_f1.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea_f1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._dropdown_scrollarea_f1__content.onmouseup = null;
			me._dropdown_scrollarea_f1__content.onmousemove = null;
			me._dropdown_scrollarea_f1__content.ontouchend = null;
			me._dropdown_scrollarea_f1__content.ontouchmove = null;
			me._dropdown_scrollarea_f1__content.onpointerup = null;
			me._dropdown_scrollarea_f1__content.onpointermove = null;
			setTimeout(function() { me._dropdown_scrollarea_f1.ggIsDragging = false; }, 100);
		}
		me._dropdown_scrollarea_f1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._dropdown_scrollarea_f1.ggDragStartX) > 10 || Math.abs(eventY - me._dropdown_scrollarea_f1.ggDragStartY) > 10) me._dropdown_scrollarea_f1.ggIsDragging = true;
			var diffX = (eventX - me._dropdown_scrollarea_f1.ggDragLastX) * me._dropdown_scrollarea_f1.ggHPercentVisible;
			var diffY = (eventY - me._dropdown_scrollarea_f1.ggDragLastY) * me._dropdown_scrollarea_f1.ggVPercentVisible;
			me._dropdown_scrollarea_f1.ggDragInertiaX = -diffX;
			me._dropdown_scrollarea_f1.ggDragInertiaY = -diffY;
			me._dropdown_scrollarea_f1.ggDragLastX = eventX;
			me._dropdown_scrollarea_f1.ggDragLastY = eventY;
			me._dropdown_scrollarea_f1.ggScrollByX(-diffX);
			me._dropdown_scrollarea_f1.ggScrollByY(-diffY);
		}
		me._dropdown_scrollarea_f1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea_f1.ggDragLastX = me._dropdown_scrollarea_f1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea_f1.ggDragLastY = me._dropdown_scrollarea_f1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea_f1__content.onmouseup = me._dropdown_scrollarea_f1__content.mousetouchend;
			me._dropdown_scrollarea_f1__content.ontouchend = me._dropdown_scrollarea_f1__content.mousetouchend;
			me._dropdown_scrollarea_f1__content.onmousemove = me._dropdown_scrollarea_f1__content.mousetouchmove;
			me._dropdown_scrollarea_f1__content.ontouchmove = me._dropdown_scrollarea_f1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea_f1__content.onpointerup = me._dropdown_scrollarea_f1__content.ontouchend;
				me._dropdown_scrollarea_f1__content.onpointermove = me._dropdown_scrollarea_f1__content.ontouchmove;
			}
		}
		els.onmousedown = me._dropdown_scrollarea_f1__content.mousetouchstart;
		els.ontouchstart = me._dropdown_scrollarea_f1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._dropdown_scrollarea_f1__content.mousetouchstart;
		}
		el.ggId="Dropdown Scrollarea_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_scrollarea_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_scrollarea_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_scrollarea_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_scrollarea_f1.style.transition='width 0s, height 0s';
				if (me._dropdown_scrollarea_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_scrollarea_f1.style.width='215px';
					me._dropdown_scrollarea_f1.style.height='115px';
					skin.updateSize(me._dropdown_scrollarea_f1);
				}
				else {
					me._dropdown_scrollarea_f1.style.width='215px';
					me._dropdown_scrollarea_f1.style.height='115px';
					skin.updateSize(me._dropdown_scrollarea_f1);
				}
			}
		}
		me._dropdown_scrollarea_f1.logicBlock_size();
		me._dropdown_scrollarea_f1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if(horScrollWasVisible != me._dropdown_scrollarea_f1.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea_f1.ggVertScrollVisible) {
					skin.updateSize(me._dropdown_scrollarea_f1);
					me._dropdown_scrollarea_f1.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner_f1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_cloner_f1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 198;
		el.ggHeight = 24;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner_f1.ggUpdating == true) return;
			me._dropdown_cloner_f1.ggUpdating = true;
			var el=me._dropdown_cloner_f1;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner_f1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner_f1.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._dropdown_cloner_f1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._dropdown_cloner_f1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._dropdown_cloner_f1.getFilteredNodes(tourNodes, filter);
			me._dropdown_cloner_f1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._dropdown_cloner_f1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._dropdown_cloner_f1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._dropdown_cloner_f1.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner_f1.ggWidth + 'px';
				parameter.height=me._dropdown_cloner_f1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_f1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._dropdown_cloner_f1.ggNodeCount = me._dropdown_cloner_f1.ggNumFilterPassed;
			me._dropdown_cloner_f1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner_f1.parentNode && me._dropdown_cloner_f1.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner_f1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner_f1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Principal";
		el.ggId="Dropdown Cloner_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_cloner_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_cloner_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_cloner_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_cloner_f1.style.transition='width 0s, height 0s';
				if (me._dropdown_cloner_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_cloner_f1.ggWidth=198;
					me._dropdown_cloner_f1.ggHeight=24;
					me._dropdown_cloner_f1.ggUpdate();
					skin.updateSize(me._dropdown_cloner_f1);
				}
				else {
					me._dropdown_cloner_f1.ggWidth=198;
					me._dropdown_cloner_f1.ggHeight=24;
					me._dropdown_cloner_f1.ggUpdate();
					skin.updateSize(me._dropdown_cloner_f1);
				}
			}
		}
		me._dropdown_cloner_f1.logicBlock_size();
		me._dropdown_cloner_f1.ggCurrentLogicStateSize = -1;
		me._dropdown_cloner_f1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner_f1.childNodes.length; i++) {
				var child=me._dropdown_cloner_f1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner_f1.ggUpdatePosition=function (useTransition) {
			me._dropdown_cloner_f1.ggUpdate();
		}
		me._dropdown_scrollarea_f1__content.appendChild(me._dropdown_cloner_f1);
		me._dropdown_background_f1.appendChild(me._dropdown_scrollarea_f1);
		me._dropdown_menu_f1.appendChild(me._dropdown_background_f1);
		el=me._dropdown_menu_title_background_f1=document.createElement('div');
		el.ggId="Dropdown Menu Title Background_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_menu_title_background_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background_f1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dropdown_menu_title_background_f1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dropdown_menu_title_background_f1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dropdown_menu_title_background_f1.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._dropdown_menu_title_background_f1.ggCurrentLogicStatePosition == 0) {
					me._dropdown_menu_title_background_f1.style.left='0px';
					me._dropdown_menu_title_background_f1.style.top='2px';
				}
				else {
					me._dropdown_menu_title_background_f1.style.left='0px';
					me._dropdown_menu_title_background_f1.style.top='0px';
				}
			}
		}
		me._dropdown_menu_title_background_f1.logicBlock_position();
		me._dropdown_menu_title_background_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_menu_title_background_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_menu_title_background_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_menu_title_background_f1.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._dropdown_menu_title_background_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_menu_title_background_f1.style.width='218px';
					me._dropdown_menu_title_background_f1.style.height='20px';
					skin.updateSize(me._dropdown_menu_title_background_f1);
				}
				else {
					me._dropdown_menu_title_background_f1.style.width='218px';
					me._dropdown_menu_title_background_f1.style.height='20px';
					skin.updateSize(me._dropdown_menu_title_background_f1);
				}
			}
		}
		me._dropdown_menu_title_background_f1.logicBlock_size();
		me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background_f1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background_f1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background_f1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background_f1.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._dropdown_menu_title_background_f1.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background_f1.style.backgroundColor="rgba(94,94,94,0.705882)";
				}
				else {
					me._dropdown_menu_title_background_f1.style.backgroundColor="rgba(39,39,39,0.705882)";
				}
			}
		}
		me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor();
		me._dropdown_menu_title_background_f1.onclick=function (e) {
			me._dropdown_background_f1.ggVisible = !me._dropdown_background_f1.ggVisible;
			var flag=me._dropdown_background_f1.ggVisible;
			me._dropdown_background_f1.style.transition='none';
			me._dropdown_background_f1.style.visibility=((flag)&&(Number(me._dropdown_background_f1.style.opacity)>0||!me._dropdown_background_f1.style.opacity))?'inherit':'hidden';
			me._dropdown_open_f1.ggVisible = !me._dropdown_open_f1.ggVisible;
			var flag=me._dropdown_open_f1.ggVisible;
			me._dropdown_open_f1.style.transition='none';
			me._dropdown_open_f1.style.visibility=((flag)&&(Number(me._dropdown_open_f1.style.opacity)>0||!me._dropdown_open_f1.style.opacity))?'inherit':'hidden';
			me._dropdown_close_f1.ggVisible = !me._dropdown_close_f1.ggVisible;
			var flag=me._dropdown_close_f1.ggVisible;
			me._dropdown_close_f1.style.transition='none';
			me._dropdown_close_f1.style.visibility=((flag)&&(Number(me._dropdown_close_f1.style.opacity)>0||!me._dropdown_close_f1.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background_f1.onmouseenter=function (e) {
			me.elementMouseOver['dropdown_menu_title_background_f1']=true;
			me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background_f1.onmouseleave=function (e) {
			me.elementMouseOver['dropdown_menu_title_background_f1']=false;
			me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background_f1.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title_f1=document.createElement('div');
		els=me._dropdown_menu_title_f1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title_f1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exposi\xe7\xe3o Longa Dura\xe7\xe3o\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title_f1.ggUpdateText();
		el.appendChild(els);
		me._dropdown_menu_title_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_f1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_menu_title_f1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_menu_title_f1.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_menu_title_f1.style.transition='width 0s, height 0s';
				if (me._dropdown_menu_title_f1.ggCurrentLogicStateSize == 0) {
					me._dropdown_menu_title_f1.style.width='195px';
					me._dropdown_menu_title_f1.style.height='20px';
					skin.updateSize(me._dropdown_menu_title_f1);
				}
				else {
					me._dropdown_menu_title_f1.style.width='195px';
					me._dropdown_menu_title_f1.style.height='20px';
					skin.updateSize(me._dropdown_menu_title_f1);
				}
			}
		}
		me._dropdown_menu_title_f1.logicBlock_size();
		me._dropdown_menu_title_f1.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background_f1.appendChild(me._dropdown_menu_title_f1);
		el=me._dropdown_open_f1=document.createElement('div');
		els=me._dropdown_open_f1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaW'+
			'dodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open_f1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_open_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open_f1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dropdown_open_f1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dropdown_open_f1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dropdown_open_f1.style.transition='left 0s, top 0s';
				if (me._dropdown_open_f1.ggCurrentLogicStatePosition == 0) {
					me._dropdown_open_f1.style.left='202px';
					me._dropdown_open_f1.style.top='5px';
				}
				else {
					me._dropdown_open_f1.style.left='201px';
					me._dropdown_open_f1.style.top='5px';
				}
			}
		}
		me._dropdown_open_f1.logicBlock_position();
		me._dropdown_open_f1.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background_f1.appendChild(me._dropdown_open_f1);
		el=me._dropdown_close_f1=document.createElement('div');
		els=me._dropdown_close_f1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaW'+
			'dodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close_f1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close_F1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 12px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_close_f1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close_f1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dropdown_close_f1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dropdown_close_f1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dropdown_close_f1.style.transition='left 0s, top 0s';
				if (me._dropdown_close_f1.ggCurrentLogicStatePosition == 0) {
					me._dropdown_close_f1.style.left='202px';
					me._dropdown_close_f1.style.top='5px';
				}
				else {
					me._dropdown_close_f1.style.left='201px';
					me._dropdown_close_f1.style.top='5px';
				}
			}
		}
		me._dropdown_close_f1.logicBlock_position();
		me._dropdown_close_f1.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background_f1.appendChild(me._dropdown_close_f1);
		me._dropdown_menu_f1.appendChild(me._dropdown_menu_title_background_f1);
		me.divSkin.appendChild(me._dropdown_menu_f1);
		el=me._btn_menu_fechar=document.createElement('div');
		els=me._btn_menu_fechar__img=document.createElement('img');
		els.className='ggskin ggskin_btn_menu_fechar';
		hs=basePath + 'images/btn_menu_fechar.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Btn_Menu_Fechar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_menu_fechar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_menu_fechar.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_menu_fechar.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_menu_fechar.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_menu_fechar.style.transition='left 0s, top 0s';
				if (me._btn_menu_fechar.ggCurrentLogicStatePosition == 0) {
					me._btn_menu_fechar.style.left='198px';
					me._btn_menu_fechar.style.top='0px';
				}
				else {
					me._btn_menu_fechar.style.left='199px';
					me._btn_menu_fechar.style.top='0px';
				}
			}
		}
		me._btn_menu_fechar.logicBlock_position();
		me._btn_menu_fechar.onclick=function (e) {
			me._btn_menu_open.style.transition='none';
			me._btn_menu_open.style.visibility=(Number(me._btn_menu_open.style.opacity)>0||!me._btn_menu_open.style.opacity)?'inherit':'hidden';
			me._btn_menu_open.ggVisible=true;
			me._btn_menu_fechar.style.transition='none';
			me._btn_menu_fechar.style.visibility='hidden';
			me._btn_menu_fechar.ggVisible=false;
			me._mainmenu.style.transition='none';
			me._mainmenu.style.visibility='hidden';
			me._mainmenu.ggVisible=false;
			me._dropdown_menu_f1.style.transition='none';
			me._dropdown_menu_f1.style.visibility='hidden';
			me._dropdown_menu_f1.ggVisible=false;
		}
		me._btn_menu_fechar.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['btn_menu_fechar']=true;
		}
		me._btn_menu_fechar.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['btn_menu_fechar']=false;
		}
		me._btn_menu_fechar.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_menu_fechar);
		el=me._maozinha=document.createElement('div');
		els=me._maozinha__img=document.createElement('img');
		els.className='ggskin ggskin_maozinha';
		hs=basePath + 'images/maozinha.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Maozinha";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9999;';
		hs+='height : 26px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._maozinha.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._maozinha.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._maozinha);
		el=me._seta=document.createElement('div');
		els=me._seta__img=document.createElement('img');
		els.className='ggskin ggskin_seta';
		hs=basePath + 'images/seta.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Seta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9999;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seta.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._seta.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.description == "hide"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.hotspot.description == "show"))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._seta.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._seta.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._seta.style.transition='';
				if (me._seta.ggCurrentLogicStateVisible == 0) {
					me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
					me._seta.ggVisible=true;
				}
				else if (me._seta.ggCurrentLogicStateVisible == 1) {
					me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
					me._seta.ggVisible=true;
				}
				else {
					me._seta.style.visibility="hidden";
					me._seta.ggVisible=false;
				}
			}
		}
		me._seta.logicBlock_visible();
		me._seta.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._seta);
		me._float_cursor.logicBlock_visible();
		me._ring_white.logicBlock_visible();
		me._ring_white.logicBlock_bordercolor();
		el = me._float_cursor_code;
		// 1. Bloqueio global da mãozinha (cursor pointer)
var styleSheet = document.createElement("style");
styleSheet.innerText = "* { cursor: none !important; }";
document.head.appendChild(styleSheet);

// Configuração inicial do cursor
me._float_cursor.ggMousePos={ x: -1, y:0 };
me._float_cursor.style.transition = "opacity 0.5s"; // Adiciona um fade suave ao sumir

me._float_cursor.ggUpdateCursor=function() {
let el=me._float_cursor;
let pt=player.getPositionAngles(el.ggMousePos.x,el.ggMousePos.y);
let style=el.style;
if ((pt.tilt>=0) || (el.ggMousePos.x<0)) {
style.visibility="hidden";
style.opacity="0";
} else {
let vs=player.getViewerSize();
let dist=200; // tamanho do gráfico
let x=-dist*Math.tan((pt.tilt-90.0) * Math.PI/180.0);
let hs="";
let cp=player.getCurrentPerspective();
hs += 'translate3d(0px,0px,-1000px) perspective(' + cp + 'px) ';
hs += 'translate3d(0px,0px,' + cp + 'px) ';
hs += 'rotateX(' + (90.0+player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateZ(' + (player.getPan()+pt.pan).toFixed(10) + 'deg) ';
hs += 'translate3d(' + 0 + 'px,' + x + 'px,' + (-dist) + 'px) ';
style.transform=hs;
style.transformOrigin = '0% 0%';
style.left = vs.width / 2 + "px";
style.top = vs.height / 2 + "px";
// Obedece à visibilidade mestre do skin
style.visibility=el.ggVisible?'inherit':'hidden';
}
if (me._hide_system_cursor) me._hide_system_cursor.style.visibility=style.visibility=='hidden'?'hidden':'inherit';
}

// Lógica de movimento e timer de 2 segundos
me.divSkin.addEventListener('mousemove', e => {
let el=me._float_cursor;
let rect = me.divSkin.getBoundingClientRect();
// 1. Torna o cursor visível ao mover
el.style.opacity = "1";
el.style.visibility = "inherit";
el.ggMousePos.x=e.clientX - rect.left;
el.ggMousePos.y=e.clientY - rect.top;
el.ggUpdateCursor();
// 2. Reseta o timer de inatividade
clearTimeout(me._cursorTimer);
// 3. Define o tempo para sumir (2000ms = 2 segundos)
me._cursorTimer = setTimeout(() => {
el.style.opacity = "0";
// Aguarda o fade-out terminar para esconder de vez
setTimeout(() => { if(el.style.opacity === "0") el.style.visibility = "hidden"; }, 500);
}, 2000);
});

me.player.on("positionchanged", () => {
me._float_cursor.ggUpdateCursor();
});

;
		me.elementMouseOver['buttons_social']=false;
		me.elementMouseOver['button_wpp']=false;
		me.elementMouseOver['button_twitter']=false;
		me.elementMouseOver['button_facebook']=false;
		me._button_specifications.logicBlock_visible();
		me.elementMouseOver['button_specifications']=false;
		me.elementMouseOver['stop_image_specification']=false;
		me.elementMouseOver['start_image_specification']=false;
		me.elementMouseOver['tooltip_btn_specifications']=false;
		me.elementMouseOver['background_specifications']=false;
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu']=false;
		me._thumbnail.logicBlock_visible();
		me.elementMouseOver['thumbnail']=false;
		me._thumbnail_hide_button.logicBlock_alpha();
		me.elementMouseOver['thumbnail_hide_button']=false;
		me._thumbnail_show_button.logicBlock_alpha();
		me.elementMouseOver['thumbnail_show_button']=false;
		me.elementMouseOver['tooltip_btn_thumbnail']=false;
		me.elementMouseOver['button_fullscreen']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me.elementMouseOver['tooltip_btn_fullscreen']=false;
		me.elementMouseOver['button_auto_rotate']=false;
		me._stop_rotate_image.logicBlock_visible();
		me.elementMouseOver['stop_rotate_image']=false;
		me._start_rotate_image.logicBlock_visible();
		me.elementMouseOver['start_rotate_image']=false;
		me.elementMouseOver['tooltip_btn_autorotate']=false;
		me.elementMouseOver['button_floorplan']=false;
		me.elementMouseOver['stop_image_floorplan']=false;
		me.elementMouseOver['start_image_floorplan']=false;
		me.elementMouseOver['tooltip_btn_floorplan']=false;
		me.elementMouseOver['sound_on_off']=false;
		me.elementMouseOver['sound_off']=false;
		me._sound_on_5.logicBlock_visible();
		me.elementMouseOver['sound_on_5']=false;
		me._sound_on_4.logicBlock_visible();
		me.elementMouseOver['sound_on_4']=false;
		me._sound_on_3.logicBlock_visible();
		me.elementMouseOver['sound_on_3']=false;
		me._sound_on_2.logicBlock_visible();
		me.elementMouseOver['sound_on_2']=false;
		me._sound_on_1.logicBlock_visible();
		me.elementMouseOver['sound_on_1']=false;
		me._sound_on_0.logicBlock_visible();
		me.elementMouseOver['sound_on_0']=false;
		me._sound_up.logicBlock_alpha();
		me.elementMouseOver['sound_up']=false;
		me._sound_down.logicBlock_alpha();
		me.elementMouseOver['sound_down']=false;
		me.elementMouseOver['logo_market3r']=false;
		me.elementMouseOver['marketer']=false;
		me.elementMouseOver['logo_mtc']=false;
		me.elementMouseOver['mtc']=false;
		el = me._thumbnail_menu_code;
		;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me.elementMouseOver['mapa_fullscreen_container']=false;
		me._rectangle_2.logicBlock_position();
		me._rectangle_2.logicBlock_size();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggLastLat = 0.0;
		me._map_1.ggLastLng = 0.0;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.273438;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#272727',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#272727',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggSetLayer=function(layerIndex) {
			if (typeof me._map_1.ggMapLayers === 'object' && me._map_1.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._map_1.ggMapLayers).length) {
				me._map_1.ggMap.removeLayer(me._map_1.ggCurMap);
				me._map_1.ggCurMap = me._map_1.ggMapLayers[Object.keys(me._map_1.ggMapLayers)[layerIndex]];
				me._map_1.ggMap.addLayer(me._map_1.ggCurMap);
			}
		}
		me._map_1.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!me._map_1.ggMapId) return;
			if (!me._map_1.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._map_1.ggLastLat, me._map_1.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 2;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 2;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._map_1.ggMap.setMaxBounds(maxBounds);
					me._map_1.ggMap.setMinZoom(me._map_1.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._map_1.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_1.ggMapLayers, overlayMaps).addTo(me._map_1.ggMap);
						me._map_1.ggCurMap.addTo(me._map_1.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._map_1.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_1.ggMapLayers, overlayMaps).addTo(me._map_1.ggMap);
						me._map_1.ggCurMap.addTo(me._map_1.ggMap);
						me._map_1.ggMap.on('baselayerchange', function(event) {
							me._map_1.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_1.ggMap);
					}
				}
				me._map_1.ggMap.on('zoom', function() {
					me._map_1.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._map_1.mapHeightInDeg / 2;
					mapCenter.lng = me._map_1.mapWidthInDeg / 2;
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 9;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_1.ggMap);
				me._map_1.ggMap.on('move zoom', function() {
					me._map_1.ggCheckBounds(mapDetails);
					me._map_1.ggRadar.update();
				});
				me._map_1.ggCheckBounds(mapDetails);
			}
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
		me._map_1.ggClearMapMarkers();
		if (me._map_1.ggMap) me._map_1.ggMap.remove();
		me._map_1.ggMap = null;
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_1.ggMap);
				}
			}
			me._map_1.ggMarkerArray=[];
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggLastActivMarker = null;
		}
		me._map_1.ggCenterNode=function(nodeId) {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMapNotLoaded) return;
			if (!me._map_1.ggMap) return;
			if (me._map_1.ggMarkerBounds.isValid()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map_1.ggMap.zoomOut(1, {animate: false});
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._map_1.ggMapId) == 'web') {
							me._map_1.ggMap.setZoom(2);
						} else {
							me._map_1.ggMap.setZoom(7 + 2);
						}
					}
				} else {
					me._map_1.ggMap.setView(me._map_1.ggMarkerBounds.getCenter(), me._map_1.ggMap.getZoom());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						if (force) {
						me._map_1.ggMap.setZoom(18);
						} else {
							me._map_1.ggMap.setZoom(2);
						}
					} else {
						if (force) {
						me._map_1.ggMap.setZoom(7);
						} else {
							me._map_1.ggMap.setZoom(7 + 2);
						}
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map_1.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -15 + 'px';
					div.style.top = -30 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map_1.ggMap);
					me._map_1.ggMarkerArray[id]=marker;
					me._map_1.ggMarkerInstances.push(div);
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
				me._map_1.ggLastLat = me._map_1.ggMap.getCenter().lat;
				me._map_1.ggLastLng = me._map_1.ggMap.getCenter().lng;
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(true);
				me._map_1.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._map_1.ggMapId);
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_1.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_1.mapHeightInDeg = me._map_1.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_1.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_1.mapWidthInDeg = me._map_1.mapHeightInDeg * mapAR;
			}
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._map_1.mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				var xMargin = (me._map_1.clientWidth * pixelInDeg - me._map_1.mapWidthInDeg) / 2;
				if (x < me._map_1.mapWidthInDeg / 2 - xMargin) x = me._map_1.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_1.mapWidthInDeg / 2 + xMargin) x = me._map_1.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_1.mapWidthInDeg - xOffset) x = me._map_1.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_1.mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				var yMargin = (me._map_1.clientHeight * pixelInDeg - me._map_1.mapHeightInDeg) / 2;
				if (y < -me._map_1.mapHeightInDeg / 2 - yMargin) y = -me._map_1.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_1.mapHeightInDeg / 2 + yMargin) y = -me._map_1.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_1.mapHeightInDeg + yOffset) y = -me._map_1.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._map_1.ggMap.setView(newCenter, me._map_1.ggMap.getZoom(), {animate: false});
			}
			me._map_1.ggInCheckBounds = false;
		}
		me.elementMouseOver['btn_menu_open']=false;
		me.elementMouseOver['intro_screen']=false;
		me._btn_entrar.logicBlock_scaling();
		me.elementMouseOver['btn_entrar']=false;
		me._mainmenu.logicBlock_size();
		me._dropdown_menu_f1.logicBlock_size();
		me.elementMouseOver['dropdown_menu_f1']=false;
		me._dropdown_background_f1.logicBlock_size();
		me._dropdown_scrollarea_f1.logicBlock_size();
		me._dropdown_cloner_f1.logicBlock_size();
		me._dropdown_menu_title_background_f1.logicBlock_position();
		me._dropdown_menu_title_background_f1.logicBlock_size();
		me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor();
		me.elementMouseOver['dropdown_menu_title_background_f1']=false;
		me._dropdown_menu_title_f1.logicBlock_size();
		me._dropdown_open_f1.logicBlock_position();
		me._dropdown_close_f1.logicBlock_position();
		me._btn_menu_fechar.logicBlock_position();
		me.elementMouseOver['btn_menu_fechar']=false;
		me._seta.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._seta.logicBlock_visible();
		});
		player.addListener('autorotatechanged', function(event) {
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._dropdown_cloner_f1.ggInstances.length; i++) {
				me._dropdown_cloner_f1.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._thumbnail_hide_button.logicBlock_alpha();
			me._thumbnail_show_button.logicBlock_alpha();
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
			me._sound_up.logicBlock_alpha();
			me._sound_down.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._dropdown_cloner_f1.ggUpdateConditionNodeChange();
			me._seta.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._dropdown_cloner_f1.ggInstances.length; i++) {
				me._dropdown_cloner_f1.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_hide_button.logicBlock_alpha();
			me._thumbnail_show_button.logicBlock_alpha();
			player.setVolume("_main",0.4);
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
			me._sound_up.logicBlock_alpha();
			me._sound_down.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			if (player.transitionsDisabled) {
				me._borda.style.transition='none';
			} else {
				me._borda.style.transition='all 3000ms ease 1000ms';
			}
			me._borda.style.opacity='1';
			me._borda.style.visibility=me._borda.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._letreiro_centro_de_memria.style.transition='none';
			} else {
				me._letreiro_centro_de_memria.style.transition='all 1000ms ease 500ms';
			}
			me._letreiro_centro_de_memria.style.opacity='1';
			me._letreiro_centro_de_memria.style.visibility=me._letreiro_centro_de_memria.ggVisible?'inherit':'hidden';
			me._dropdown_scrollarea_f1.ggUpdatePosition();
			me._seta.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_1.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me._dropdown_cloner_f1.ggInstances.length; i++) {
				me._dropdown_cloner_f1.ggInstances[i].ggEvent_sizechanged(event);
			}
			me._variable_resp_phone.logicBlock();
			me._button_specifications.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail.logicBlock_visible();
			me._rectangle_2.logicBlock_position();
			me._rectangle_2.logicBlock_size();
			me._btn_entrar.logicBlock_scaling();
			me._mainmenu.logicBlock_size();
			me._dropdown_menu_f1.logicBlock_size();
			me._dropdown_background_f1.logicBlock_size();
			me._dropdown_scrollarea_f1.logicBlock_size();
			me._dropdown_cloner_f1.logicBlock_size();
			me._dropdown_menu_title_background_f1.logicBlock_position();
			me._dropdown_menu_title_background_f1.logicBlock_size();
			me._dropdown_menu_title_f1.logicBlock_size();
			me._dropdown_open_f1.logicBlock_position();
			me._dropdown_close_f1.logicBlock_position();
			me._btn_menu_fechar.logicBlock_position();
		});
		player.addListener('varchanged_esconder_cursor', function(event) {
			me._ring_white.logicBlock_visible();
		});
		player.addListener('varchanged_opt_3d_preview_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview_1();
				}
			}
		});
		player.addListener('varchanged_opt_hotspot_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_description')) {
				for(var i = 0; i < hotspotTemplates['ht_description'].length; i++) {
					hotspotTemplates['ht_description'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
		});
		player.addListener('varchanged_opt_thumbnail_menu_tooltip_1', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_varchanged_opt_thumbnail_menu_tooltip_1(event);
			}
		});
		player.addListener('varchanged_vis_thumbnail_menu', function(event) {
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_hide_button.logicBlock_alpha();
			me._thumbnail_show_button.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails_phone', function(event) {
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_volume', function(event) {
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
			me._sound_up.logicBlock_alpha();
			me._sound_down.logicBlock_alpha();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
			me._dropdown_cloner_f1.ggUpdate();
		});
	};
	function SkinCloner_dropdown_cloner_f1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._dropdown_menu_text=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_menu_text;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #848484;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_text.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_menu_text.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_menu_text.style.transition='width 0s, height 0s, background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateSize == 0) {
					me._dropdown_menu_text.style.width='178px';
					me._dropdown_menu_text.style.height='20px';
					skin.updateSize(me._dropdown_menu_text);
				}
				else {
					me._dropdown_menu_text.style.width='178px';
					me._dropdown_menu_text.style.height='20px';
					skin.updateSize(me._dropdown_menu_text);
				}
			}
		}
		me._dropdown_menu_text.logicBlock_size();
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text.style.transition='width 0s, height 0s, background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text.style.backgroundColor="rgba(22,48,104,0.588235)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text.style.backgroundColor="rgba(22,48,104,0.588235)";
				}
				else {
					me._dropdown_menu_text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor();
		me._dropdown_menu_text.onclick=function (e) {
			if (me._dropdown_menu_text.isDragging()) return;
			if (
				(
					((me._dropdown_menu_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._dropdown_menu_text.onmouseenter=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseleave=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dropdown_checkmark;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
			'MiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41Yz'+
			'AuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true)) || 
				((me._dropdown_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style.transition='opacity 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.logicBlock_alpha();
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
		me._dropdown_menu_text.logicBlock_size();
		me._dropdown_menu_text.logicBlock_backgroundcolor();
		me.elementMouseOver['dropdown_menu_text']=false;
		me._dropdown_checkmark.logicBlock_alpha();
			me.ggEvent_changenode=function(event) {
				me._dropdown_menu_text.logicBlock_backgroundcolor();
				me._dropdown_checkmark.logicBlock_alpha();
				me._dropdown_checkmark.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._dropdown_checkmark.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function(event) {
				me._dropdown_menu_text.logicBlock_size();
			};
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_phone_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 83px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._thumbnail_image_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=true;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=false;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone.style.visibility=me._thumbnail_border_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone.style.opacity == 0.0) { me._thumbnail_border_phone.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_border_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjYzJlODEyIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_visited_phone);
		me.__div.appendChild(me._thumbnail_image_phone);
		me.elementMouseOver['thumbnail_image_phone']=false;
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 131px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #272727;';
		hs+='cursor : pointer;';
		hs+='height : 78px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(39,39,39,1)";
				}
			}
		}
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.onclick=function (e) {
			if (me._thumbnail_active.isDragging()) return;
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 78px;';
		hs+='left : calc(50% - ((131px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((78px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
			'MiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41Yz'+
			'AuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style.transition='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style.transition='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha();
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
		me._thumbnail_active.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active.logicBlock_bordercolor();
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_thumbnail_menu_tooltip_1=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		els=me._map_pin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._map_pin__img.setAttribute('src',basePath + 'images/map_pin.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin";
		el.ggDx=-102;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 355px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) - 102px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._map_pin.onmouseenter=function (e) {
			me._tooltip_pin.style.transition='none';
			me._tooltip_pin.style.visibility=(Number(me._tooltip_pin.style.opacity)>0||!me._tooltip_pin.style.opacity)?'inherit':'hidden';
			me._tooltip_pin.ggVisible=true;
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility=(Number(skin._maozinha.style.opacity)>0||!skin._maozinha.style.opacity)?'inherit':'hidden';
			skin._maozinha.ggVisible=true;
			skin._seta.style.transition='none';
			skin._seta.style.visibility='hidden';
			skin._seta.ggVisible=false;
			me.elementMouseOver['map_pin']=true;
		}
		me._map_pin.onmouseleave=function (e) {
			me._tooltip_pin.style.transition='none';
			me._tooltip_pin.style.visibility='hidden';
			me._tooltip_pin.ggVisible=false;
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility='hidden';
			skin._maozinha.ggVisible=false;
			skin._seta.style.transition='none';
			skin._seta.style.visibility=(Number(skin._seta.style.opacity)>0||!skin._seta.style.opacity)?'inherit':'hidden';
			skin._seta.ggVisible=true;
			me.elementMouseOver['map_pin']=false;
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip_pin=document.createElement('div');
		els=me._tooltip_pin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_pin";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 2000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(39,39,39,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._tooltip_pin.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_pin.ggUpdateText();
		player.addListener('changenode', function() {
			me._tooltip_pin.ggUpdateText();
		});
		el.appendChild(els);
		me._tooltip_pin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_pin.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._tooltip_pin);
		me.elementMouseOver['map_pin']=false;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.setVariableValue('esconder_cursor', true);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility=(Number(skin._maozinha.style.opacity)>0||!skin._maozinha.style.opacity)?'inherit':'hidden';
			skin._maozinha.ggVisible=true;
			skin._seta.style.transition='none';
			skin._seta.style.visibility='hidden';
			skin._seta.ggVisible=false;
			me.elementMouseOver['ht_info']=true;
			me._tt_ht_node.logicBlock_visible();
			me._hotspot_preview.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility='hidden';
			skin._maozinha.ggVisible=false;
			skin._seta.style.transition='none';
			skin._seta.style.visibility=(Number(skin._seta.style.opacity)>0||!skin._seta.style.opacity)?'inherit':'hidden';
			skin._seta.ggVisible=true;
			me.elementMouseOver['ht_info']=false;
			me._tt_ht_node.logicBlock_visible();
			me._hotspot_preview.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICBDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUgICBjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQtMS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBs'+
			'Ny4yLDcuMkwtMTY3LjksMzY2LjZ6ICAgIE0tMTU0LjksMzk0YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjV2MTEuNGMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN0wtMTU0LjksMzk0eiBNLTE1NC42LDM4MyAgIGMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjIgICBjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC'+
			'0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCAgIGMtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjljMC45LTAuOSwyLjQtMC45LDMuMywwbDEwLDkuN0wtMTY3LDQwMy40eiBNLTEzNy45LDQyMCAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgIGMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMw'+
			'LTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMgICBsLTQuMSw0LjFjLTcuOC0wLjktMTUuMS0yLjYtMjEuMS01djM4LjljOC45LTMuNiwyMC42LTUuNiwzMi42LTUuNmMxMiwwLDIzLjYsMiwzMi42LDUuNnYtMzguOWMtOC45LDMuNi0yMC42LDUuNi0zMi42LDUuNiAgIGMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMTM3LjksNDIweiIgZmlsbD0iIzAwMDAwMCIvPgogPC'+
			'9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43ICAgIEMtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDUuOCw0MDcuM3Y2LjdjOC44LTMuMSwxOS42LTQuOCwzMC44LTQuOGMwLjcsMCwxLjMsMCwyLDBsNC4yLTQuMWMtMi0wLjEtNC4xLTAuMS02LjItMC4xICAgIEMtMTg2LjMsNDA1LTE5Ny4zLDQwNS44LTIwNS44LDQwNy4zeiIgZmlsbD0iI0ZGRkZGRiIv'+
			'PgogICA8cGF0aCBkPSJNLTE0NC4yLDQxMy45di0xMS40bC04LjctOC41Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMiAgICBDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkgICAgQy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTkuOC'+
			'wzODQuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMS4yLDEuMmMtMC41LDAuNS0wLjUsMS40LDAsMmw3LjgsNy44YzAuNSwwLjUsMS43LDEuNSwyLDEuNSAgICBjMC4zLDAuMSwwLjgsMC4xLDEuMSwwYzAuMy0wLjEsMS40LTEsMi0xLjVsMjUuMy0yNS4zYzAuNS0wLjUsMC41LTEuNCwwLTJsLTEuMi0xLjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTI0LjcsMjQuNyAgICBMLTE5OS44LDM4NC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTguNiw2LjEtMzAsNi41bC00LjYsNC42YzAuMiwwLDAuNSwwLDAu'+
			'NywwICAgIGMxMiwwLDIzLjYtMiwzMi42LTUuNnYzOC45Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjljNiwyLjQsMTMuMyw0LjEsMjEuMSw1bDQuMS00LjEgICAgYy0xMC4xLTAuNy0xOS41LTIuOS0yNi41LTYuM2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjkgICAgYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLj'+
			'ItMC4xICAgIGMwLjctMC40LDEuMS0xLjEsMS4xLTEuOXYtNDUuOEMtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMiAgIGMtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0xLjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMt'+
			'MS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGw4LDhMLTE2Ny4xLDM2My4yeiBNLTE1Mi43LDM5My43YzAuMy0wLjMsMC43LTAuNSwxLjEtMC41czAuOCwwLjIsMS4xLDAuNGw5LjYsOS40djEyLjcgICBjLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUgICBDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLD'+
			'UuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICBjMi4zLDAsNC42LDAsNi45LDAuMUwtMTcyLjgsNDEwLjV6IE0tMTY2LjIsNDA0LjFjLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40YzEtMSwyLjYtMSwzLjcsMCAgIGwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICBzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4z'+
			'LTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xICAgYzAuNy0wLjUsMS42LTAuNSwyLjQtMC4xYzcuOCwzLjgsMTguMiw2LjIsMjkuNCw3bC00LjYsNC42Yy04LjYtMC45LTE2LjctMi44LTIzLjQtNS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjIgICBzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMSAgIGMwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsND'+
			'IyLjVMLTEzMy44LDQyMi41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCAgICBDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0wLjEtNi45LTAuMSAgICBD'+
			'LTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkgICAgQy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3LjctMTUzLjUsMzg4Lj'+
			'gtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43ICAgIGMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUgICAgTC0yMDIuNiwzODIuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUt'+
			'MS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiAgICBjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xICAgIGMwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLD'+
			'EuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xICAgIHMxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style.transition='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_visited.onmouseenter=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited']=true;
		}
		me._ht_node_visited.onmouseleave=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited']=false;
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xICAgIEMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNiAgICBjLTEyLjgsMC0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yYy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMS45di00NS44YzAt'+
			'MC44LDAuNC0xLjUsMS4xLTEuOSAgICBjMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjZjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45ICAgIEMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYgICAgQy0xODcsMzgzLjMtMTk4LjYsMzgxLj'+
			'ItMjA3LjYsMzc3Ljd6IE0tMTc1LDQwOS4xYy0xMS4xLDAtMjIsMS43LTMwLjgsNC44di02LjdjOC41LTEuNCwxOS40LTIuMywzMC44LTIuM2MyLjEsMCw0LjEsMCw2LjIsMC4xICAgIGwtNC4yLDQuMUMtMTczLjcsNDA5LjItMTc0LjMsNDA5LjEtMTc1LDQwOS4xeiBNLTE0NC4yLDQxMy45Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43bDE1LjYtMTUuMmMwLjMtMC4zLDAuNi0wLjQsMS0wLjQgICAgYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0wLjQsNC40LDAuNiw0LjcsMi4zICAgIGMwLjMs'+
			'MS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMuMiwzODkuOWwxMCw5LjdsLTMuOCwzLjcgICAgYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOUMtMTc1LjYsMzg5LTE3NC4xLDM4OS0xNzMuMiwzODkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjcsNDAzLjhjNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2'+
			'wtMTAtOS43Yy0wLjktMC45LTIuNC0wLjktMy4zLDAgICAgTC0xOTAuNyw0MDMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjEgICAgQy0xNzAuOSw0MDUtMTcyLjksNDA1LTE3NSw0MDV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUzLjksMzkzLjZjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMmM5LjUsMC40LDE4LjcsMiwyNi4zLDQuN3YtMTEuNGwtOC43LTguNSAgICBDLTE1My4yLDM5My44LTE1'+
			'My41LDM5My42LTE1My45LDM5My42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTguNyw0LjItMjEsNi42LTMzLjgsNi42Yy0xMi45LDAtMjUuMi0yLjQtMzMuOC02LjYgICAgYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yICAgIGM4LjctNC4yLDIxLTYuNiwzMy44LTYuNmMxMi44LDAsMjUuMiwyLjQsMzMuOCw2LjZjMC43LDAuMywxLjUsMC4zLDIuMi'+
			'0wLjFjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjggICAgQy0xMzcuOSwzNzMuNC0xMzguMywzNzIuNy0xMzksMzcyLjN6IE0tMTQyLjQsNDE2LjVjLTguOS0zLjYtMjAuNi01LjYtMzIuNi01LjZzLTIzLjYsMi0zMi42LDUuNnYtMzguOSAgICBjOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45ICAgIEMtMTU3LjgsMzg4LjYtMTU1Ljcs'+
			'Mzg5LjYtMTUzLjQsMzg5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC43Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICAgcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAuMi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUtMS4yLTEuMy0xLjItMi4x'+
			'di01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMSAgICBjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjOS42LDQuNiwyMy4zLDcuMywzNy42LDcuM2MxNC4zLDAsMjgtMi43LDM3LjYtNy4zYzAuOC0wLjQsMS43LTAuMywyLjQsMC4xYzAuNywwLjUsMS4yLDEuMywxLjIsMi4xICAgIEMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMiw2LjIgICAgQy0xODguMywzODEuNy0yMD'+
			'EuMywzNzkuNS0yMTEuMiwzNzUuNXogTS0xNzUsNDEwLjVjLTEyLjQsMC0yNC40LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICAgYzIuMywwLDQuNiwwLDYuOSwwLjFsLTQuNiw0LjVDLTE3My41LDQxMC41LTE3NC4zLDQxMC41LTE3NSw0MTAuNXogTS0xNDAuOCw0MTUuOGMtOC40LTMtMTguNi00LjgtMjkuMi01LjJsMTcuMy0xNi45ICAgIGMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjUg'+
			'ICAgYzAuNCwxLjktMS40LDMuOC0zLjksNC4zYy0yLjUsMC41LTQuOS0wLjYtNS4zLTIuNUMtMTU2LjYsMzgzLjktMTU0LjgsMzgyLTE1Mi4zLDM4MS41eiBNLTE3MywzODkuMWwxMS4xLDEwLjhsLTQuMiw0LjEgICAgYy0yLjktMC4xLTUuOS0wLjItOC44LTAuMmMtNiwwLTExLjgsMC4yLTE3LjQsMC42bDE1LjgtMTUuNEMtMTc1LjYsMzg4LjEtMTc0LDM4OC4xLTE3MywzODkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjQsNDA0LjVjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4Lj'+
			'gsMC4ybDQuMi00LjFsLTExLjEtMTAuOGMtMS0xLTIuNi0xLTMuNiwwICAgIEwtMTkyLjQsNDA0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNSAgICBDLTE3MC40LDQwNS45LTE3Mi43LDQwNS45LTE3NSw0MDUuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNiwzOTMuMmMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjljMTAuNiwwLjQsMjAuOCwyLjMsMjkuMiw1LjJ2LTEyLjdsLTku'+
			'Ni05LjQgICAgQy0xNTAuNywzOTMuNC0xNTEuMSwzOTMuMi0xNTEuNiwzOTMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy05LjYsNC42LTIzLjMsNy4zLTM3LjYsNy4zcy0yOC0yLjctMzcuNi03LjMgICAgYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yICAgIGM5LjYtNC42LDIzLjMtNy4zLDM3LjYtNy4zYzE0LjMsMCwyOCwyLjcsMzcuNiw3Lj'+
			'NjMC44LDAuNCwxLjcsMC4zLDIuNC0wLjFzMS4yLTEuMywxLjItMi4xdi01MC45ICAgIEMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXogTS0xMzguOCw0MTguN2MtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzkuOSw0LDIyLjksNi4yLDM2LjIsNi4yICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3'+
			'LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style.transition='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.logicBlock_visible();
		me._ht_node_image.onmouseenter=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image']=true;
		}
		me._ht_node_image.onmouseleave=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_node_image);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 90;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_info.appendChild(me._ht_node_customimage);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_node.style.top='-47px';
				}
				else {
					me._tt_ht_node.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_node.style.top='24px';
				}
			}
		}
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.logicBlock_visible();
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._tt_ht_node);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggDy=-76;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 74px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74px + 0px) / 2) - 76px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style.transition='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.logicBlock_visible();
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 100;';
		hs+='background : rgba(39,39,39,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 62px;';
		hs+='left : calc(50% - ((142px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((62px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style.transition='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.logicBlock_visible();
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_checkmark_tick__img.setAttribute('src',basePath + 'images/ht_checkmark_tick.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style.transition='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.logicBlock_visible();
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 16px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._image_2);
		me._ht_info.appendChild(me._hotspot_preview);
		me.elementMouseOver['ht_info']=false;
		me._ht_node_visited.logicBlock_visible();
		me.elementMouseOver['ht_node_visited']=false;
		me._ht_node_image.logicBlock_visible();
		me.elementMouseOver['ht_node_image']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible();
		me._hotspot_preview.logicBlock_visible();
		me._ht_tooltip.logicBlock_visible();
		me._ht_checkmark_tick.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_image.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_node.logicBlock_position();
				me._tt_ht_node.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_node.logicBlock_position();
			};
			me.ggEvent_varchanged_opt_hotspot_preview=function() {
				me._tt_ht_node.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=-249;
		el.ggDy=-99;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 249px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 99px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hs_preview_image.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_scaling();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hs_preview_image.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_scaling();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=11;
		el.ggDy=-83;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 109px;';
		hs+='left : calc(50% - ((157px + 0px) / 2) + 11px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((109px + 0px) / 2) - 83px);';
		hs+='visibility : hidden;';
		hs+='width : 157px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
			'MiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41Yz'+
			'AuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((157px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 157px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._cone_de_navegao=document.createElement('div');
		els=me._cone_de_navegao__img=document.createElement('img');
		els.className='ggskin ggskin_cone_de_navegao';
		hs=basePath + 'images/cone_de_navegao.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\xcdcone de Navega\xe7\xe3o";
		el.ggDx=7;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 7px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cone_de_navegao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cone_de_navegao.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cone_de_navegao.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cone_de_navegao.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cone_de_navegao.style.transition='transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._cone_de_navegao.ggCurrentLogicStateScaling == 0) {
					me._cone_de_navegao.ggParameter.sx = 1.1;
					me._cone_de_navegao.ggParameter.sy = 1.1;
					me._cone_de_navegao.style.transform=parameterToTransform(me._cone_de_navegao.ggParameter);
					setTimeout(function() {skin.updateSize(me._cone_de_navegao);}, 350);
				}
				else {
					me._cone_de_navegao.ggParameter.sx = 1;
					me._cone_de_navegao.ggParameter.sy = 1;
					me._cone_de_navegao.style.transform=parameterToTransform(me._cone_de_navegao.ggParameter);
					setTimeout(function() {skin.updateSize(me._cone_de_navegao);}, 350);
				}
			}
		}
		me._cone_de_navegao.logicBlock_scaling();
		me._cone_de_navegao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cone_de_navegao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cone_de_navegao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cone_de_navegao.style.transition='transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._cone_de_navegao.ggCurrentLogicStateVisible == 0) {
					me._cone_de_navegao.style.visibility="hidden";
					me._cone_de_navegao.ggVisible=false;
				}
				else {
					me._cone_de_navegao.style.visibility=(Number(me._cone_de_navegao.style.opacity)>0||!me._cone_de_navegao.style.opacity)?'inherit':'hidden';
					me._cone_de_navegao.ggVisible=true;
				}
			}
		}
		me._cone_de_navegao.logicBlock_visible();
		me._cone_de_navegao.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._cone_de_navegao.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._cone_de_navegao.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._cone_de_navegao.style.transition='transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._cone_de_navegao.ggCurrentLogicStateAlpha == 0) {
					me._cone_de_navegao.style.visibility=me._cone_de_navegao.ggVisible?'inherit':'hidden';
					me._cone_de_navegao.style.opacity=1;
				}
				else {
					me._cone_de_navegao.style.visibility=me._cone_de_navegao.ggVisible?'inherit':'hidden';
					me._cone_de_navegao.style.opacity=0.4;
				}
			}
		}
		me._cone_de_navegao.logicBlock_alpha();
		me._cone_de_navegao.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._cone_de_navegao);
		el=me._ht_node_customimage0=document.createElement('div');
		els=me._ht_node_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage0.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage0.ggAltText));
			me._ht_node_customimage0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage0.ggText_untranslated = img;
			me._ht_node_customimage0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage0.ggSubElement.style.width = '0px';
			me._ht_node_customimage0.ggSubElement.style.height = '0px';
			me._ht_node_customimage0.ggSubElement.src='';
			me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage0.ggText != player._(me._ht_node_customimage0.ggText_untranslated)) {
				me._ht_node_customimage0.ggText = player._(me._ht_node_customimage0.ggText_untranslated);
				me._ht_node_customimage0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 53px;';
		hs+='left : calc(50% - ((53px + 0px) / 2) + 4px);';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage0.style.transition='';
				if (me._ht_node_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage0.style.visibility="hidden";
					me._ht_node_customimage0.ggSubElement.src='';
					me._ht_node_customimage0.ggVisible=false;
				}
				else {
					me._ht_node_customimage0.style.visibility=(Number(me._ht_node_customimage0.style.opacity)>0||!me._ht_node_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
					me._ht_node_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage0.logicBlock_visible();
		me._ht_node_customimage0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage0.clientWidth;
			var parentHeight = me._ht_node_customimage0.clientHeight;
			var img = me._ht_node_customimage0__img;
			var aspectRatioDiv = me._ht_node_customimage0.clientWidth / me._ht_node_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage0.ggScrollbars || currentWidth < me._ht_node_customimage0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage0.scrollLeft=currentWidth / 2 - me._ht_node_customimage0.clientWidth / 2;
			}
			if (!me._ht_node_customimage0.ggScrollbars || currentHeight < me._ht_node_customimage0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage0.scrollTop=currentHeight / 2 - me._ht_node_customimage0.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage0);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 11px);';
		hs+='position : absolute;';
		hs+='top : -82px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.elementMouseOver['ht_node']=false;
		me._hs_preview_image.logicBlock_alpha();
		me._hs_visited.logicBlock_visible();
		me._hs_tt.logicBlock_visible();
		me._cone_de_navegao.logicBlock_scaling();
		me._cone_de_navegao.logicBlock_visible();
		me._cone_de_navegao.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage0.style.height=hotspot.customimageheight + 'px';
			let d = 4;
			me._ht_node_customimage0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage0.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._hs_tt.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hs_tt.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview_1=function() {
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			me._external_image.ggSetImage(player._(player._(me.hotspot.url)));
			me._popup_image.style.transition='none';
			me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
			me._popup_image.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.setVariableValue('esconder_cursor', true);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility=(Number(skin._maozinha.style.opacity)>0||!skin._maozinha.style.opacity)?'inherit':'hidden';
			skin._maozinha.ggVisible=true;
			skin._seta.style.transition='none';
			skin._seta.style.visibility='hidden';
			skin._seta.ggVisible=false;
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_node0.logicBlock_visible();
			me._hotspot_preview0.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility='hidden';
			skin._maozinha.ggVisible=false;
			skin._seta.style.transition='none';
			skin._seta.style.visibility=(Number(skin._seta.style.opacity)>0||!skin._seta.style.opacity)?'inherit':'hidden';
			skin._seta.ggVisible=true;
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_node0.logicBlock_visible();
			me._hotspot_preview0.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited0=document.createElement('div');
		els=me._ht_node_visited0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICBDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUgICBjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQtMS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBs'+
			'Ny4yLDcuMkwtMTY3LjksMzY2LjZ6ICAgIE0tMTU0LjksMzk0YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjV2MTEuNGMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN0wtMTU0LjksMzk0eiBNLTE1NC42LDM4MyAgIGMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjIgICBjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC'+
			'0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCAgIGMtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjljMC45LTAuOSwyLjQtMC45LDMuMywwbDEwLDkuN0wtMTY3LDQwMy40eiBNLTEzNy45LDQyMCAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgIGMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMw'+
			'LTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMgICBsLTQuMSw0LjFjLTcuOC0wLjktMTUuMS0yLjYtMjEuMS01djM4LjljOC45LTMuNiwyMC42LTUuNiwzMi42LTUuNmMxMiwwLDIzLjYsMiwzMi42LDUuNnYtMzguOWMtOC45LDMuNi0yMC42LDUuNi0zMi42LDUuNiAgIGMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMTM3LjksNDIweiIgZmlsbD0iIzAwMDAwMCIvPgogPC'+
			'9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43ICAgIEMtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDUuOCw0MDcuM3Y2LjdjOC44LTMuMSwxOS42LTQuOCwzMC44LTQuOGMwLjcsMCwxLjMsMCwyLDBsNC4yLTQuMWMtMi0wLjEtNC4xLTAuMS02LjItMC4xICAgIEMtMTg2LjMsNDA1LTE5Ny4zLDQwNS44LTIwNS44LDQwNy4zeiIgZmlsbD0iI0ZGRkZGRiIv'+
			'PgogICA8cGF0aCBkPSJNLTE0NC4yLDQxMy45di0xMS40bC04LjctOC41Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMiAgICBDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkgICAgQy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTkuOC'+
			'wzODQuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMS4yLDEuMmMtMC41LDAuNS0wLjUsMS40LDAsMmw3LjgsNy44YzAuNSwwLjUsMS43LDEuNSwyLDEuNSAgICBjMC4zLDAuMSwwLjgsMC4xLDEuMSwwYzAuMy0wLjEsMS40LTEsMi0xLjVsMjUuMy0yNS4zYzAuNS0wLjUsMC41LTEuNCwwLTJsLTEuMi0xLjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTI0LjcsMjQuNyAgICBMLTE5OS44LDM4NC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTguNiw2LjEtMzAsNi41bC00LjYsNC42YzAuMiwwLDAuNSwwLDAu'+
			'NywwICAgIGMxMiwwLDIzLjYtMiwzMi42LTUuNnYzOC45Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjljNiwyLjQsMTMuMyw0LjEsMjEuMSw1bDQuMS00LjEgICAgYy0xMC4xLTAuNy0xOS41LTIuOS0yNi41LTYuM2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjkgICAgYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLj'+
			'ItMC4xICAgIGMwLjctMC40LDEuMS0xLjEsMS4xLTEuOXYtNDUuOEMtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_visited0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMiAgIGMtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0xLjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMt'+
			'MS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGw4LDhMLTE2Ny4xLDM2My4yeiBNLTE1Mi43LDM5My43YzAuMy0wLjMsMC43LTAuNSwxLjEtMC41czAuOCwwLjIsMS4xLDAuNGw5LjYsOS40djEyLjcgICBjLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUgICBDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLD'+
			'UuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICBjMi4zLDAsNC42LDAsNi45LDAuMUwtMTcyLjgsNDEwLjV6IE0tMTY2LjIsNDA0LjFjLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40YzEtMSwyLjYtMSwzLjcsMCAgIGwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICBzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4z'+
			'LTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xICAgYzAuNy0wLjUsMS42LTAuNSwyLjQtMC4xYzcuOCwzLjgsMTguMiw2LjIsMjkuNCw3bC00LjYsNC42Yy04LjYtMC45LTE2LjctMi44LTIzLjQtNS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjIgICBzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMSAgIGMwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsND'+
			'IyLjVMLTEzMy44LDQyMi41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCAgICBDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0wLjEtNi45LTAuMSAgICBD'+
			'LTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkgICAgQy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3LjctMTUzLjUsMzg4Lj'+
			'gtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43ICAgIGMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUgICAgTC0yMDIuNiwzODIuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUt'+
			'MS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiAgICBjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xICAgIGMwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLD'+
			'EuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xICAgIHMxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited0.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited0.style.transition='';
				if (me._ht_node_visited0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited0.style.visibility=(Number(me._ht_node_visited0.style.opacity)>0||!me._ht_node_visited0.style.opacity)?'inherit':'hidden';
					me._ht_node_visited0.ggVisible=true;
				}
				else {
					me._ht_node_visited0.style.visibility="hidden";
					me._ht_node_visited0.ggVisible=false;
				}
			}
		}
		me._ht_node_visited0.logicBlock_visible();
		me._ht_node_visited0.onmouseenter=function (e) {
			me._ht_node_visited0__img.style.visibility='hidden';
			me._ht_node_visited0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited0']=true;
		}
		me._ht_node_visited0.onmouseleave=function (e) {
			me._ht_node_visited0__img.style.visibility='inherit';
			me._ht_node_visited0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited0']=false;
		}
		me._ht_node_visited0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_node_visited0);
		el=me._ht_node_image0=document.createElement('div');
		els=me._ht_node_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xICAgIEMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNiAgICBjLTEyLjgsMC0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yYy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMS45di00NS44YzAt'+
			'MC44LDAuNC0xLjUsMS4xLTEuOSAgICBjMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjZjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45ICAgIEMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYgICAgQy0xODcsMzgzLjMtMTk4LjYsMzgxLj'+
			'ItMjA3LjYsMzc3Ljd6IE0tMTc1LDQwOS4xYy0xMS4xLDAtMjIsMS43LTMwLjgsNC44di02LjdjOC41LTEuNCwxOS40LTIuMywzMC44LTIuM2MyLjEsMCw0LjEsMCw2LjIsMC4xICAgIGwtNC4yLDQuMUMtMTczLjcsNDA5LjItMTc0LjMsNDA5LjEtMTc1LDQwOS4xeiBNLTE0NC4yLDQxMy45Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43bDE1LjYtMTUuMmMwLjMtMC4zLDAuNi0wLjQsMS0wLjQgICAgYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0wLjQsNC40LDAuNiw0LjcsMi4zICAgIGMwLjMs'+
			'MS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMuMiwzODkuOWwxMCw5LjdsLTMuOCwzLjcgICAgYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOUMtMTc1LjYsMzg5LTE3NC4xLDM4OS0xNzMuMiwzODkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjcsNDAzLjhjNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2'+
			'wtMTAtOS43Yy0wLjktMC45LTIuNC0wLjktMy4zLDAgICAgTC0xOTAuNyw0MDMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjEgICAgQy0xNzAuOSw0MDUtMTcyLjksNDA1LTE3NSw0MDV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUzLjksMzkzLjZjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMmM5LjUsMC40LDE4LjcsMiwyNi4zLDQuN3YtMTEuNGwtOC43LTguNSAgICBDLTE1My4yLDM5My44LTE1'+
			'My41LDM5My42LTE1My45LDM5My42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTguNyw0LjItMjEsNi42LTMzLjgsNi42Yy0xMi45LDAtMjUuMi0yLjQtMzMuOC02LjYgICAgYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yICAgIGM4LjctNC4yLDIxLTYuNiwzMy44LTYuNmMxMi44LDAsMjUuMiwyLjQsMzMuOCw2LjZjMC43LDAuMywxLjUsMC4zLDIuMi'+
			'0wLjFjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjggICAgQy0xMzcuOSwzNzMuNC0xMzguMywzNzIuNy0xMzksMzcyLjN6IE0tMTQyLjQsNDE2LjVjLTguOS0zLjYtMjAuNi01LjYtMzIuNi01LjZzLTIzLjYsMi0zMi42LDUuNnYtMzguOSAgICBjOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45ICAgIEMtMTU3LjgsMzg4LjYtMTU1Ljcs'+
			'Mzg5LjYtMTUzLjQsMzg5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC43Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICAgcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAuMi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUtMS4yLTEuMy0xLjItMi4x'+
			'di01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMSAgICBjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjOS42LDQuNiwyMy4zLDcuMywzNy42LDcuM2MxNC4zLDAsMjgtMi43LDM3LjYtNy4zYzAuOC0wLjQsMS43LTAuMywyLjQsMC4xYzAuNywwLjUsMS4yLDEuMywxLjIsMi4xICAgIEMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMiw2LjIgICAgQy0xODguMywzODEuNy0yMD'+
			'EuMywzNzkuNS0yMTEuMiwzNzUuNXogTS0xNzUsNDEwLjVjLTEyLjQsMC0yNC40LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICAgYzIuMywwLDQuNiwwLDYuOSwwLjFsLTQuNiw0LjVDLTE3My41LDQxMC41LTE3NC4zLDQxMC41LTE3NSw0MTAuNXogTS0xNDAuOCw0MTUuOGMtOC40LTMtMTguNi00LjgtMjkuMi01LjJsMTcuMy0xNi45ICAgIGMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjUg'+
			'ICAgYzAuNCwxLjktMS40LDMuOC0zLjksNC4zYy0yLjUsMC41LTQuOS0wLjYtNS4zLTIuNUMtMTU2LjYsMzgzLjktMTU0LjgsMzgyLTE1Mi4zLDM4MS41eiBNLTE3MywzODkuMWwxMS4xLDEwLjhsLTQuMiw0LjEgICAgYy0yLjktMC4xLTUuOS0wLjItOC44LTAuMmMtNiwwLTExLjgsMC4yLTE3LjQsMC42bDE1LjgtMTUuNEMtMTc1LjYsMzg4LjEtMTc0LDM4OC4xLTE3MywzODkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjQsNDA0LjVjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4Lj'+
			'gsMC4ybDQuMi00LjFsLTExLjEtMTAuOGMtMS0xLTIuNi0xLTMuNiwwICAgIEwtMTkyLjQsNDA0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNSAgICBDLTE3MC40LDQwNS45LTE3Mi43LDQwNS45LTE3NSw0MDUuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNiwzOTMuMmMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjljMTAuNiwwLjQsMjAuOCwyLjMsMjkuMiw1LjJ2LTEyLjdsLTku'+
			'Ni05LjQgICAgQy0xNTAuNywzOTMuNC0xNTEuMSwzOTMuMi0xNTEuNiwzOTMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy05LjYsNC42LTIzLjMsNy4zLTM3LjYsNy4zcy0yOC0yLjctMzcuNi03LjMgICAgYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yICAgIGM5LjYtNC42LDIzLjMtNy4zLDM3LjYtNy4zYzE0LjMsMCwyOCwyLjcsMzcuNiw3Lj'+
			'NjMC44LDAuNCwxLjcsMC4zLDIuNC0wLjFzMS4yLTEuMywxLjItMi4xdi01MC45ICAgIEMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXogTS0xMzguOCw0MTguN2MtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzkuOSw0LDIyLjksNi4yLDM2LjIsNi4yICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3'+
			'LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image0.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image0.style.transition='';
				if (me._ht_node_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image0.style.visibility="hidden";
					me._ht_node_image0.ggVisible=false;
				}
				else {
					me._ht_node_image0.style.visibility=(Number(me._ht_node_image0.style.opacity)>0||!me._ht_node_image0.style.opacity)?'inherit':'hidden';
					me._ht_node_image0.ggVisible=true;
				}
			}
		}
		me._ht_node_image0.logicBlock_visible();
		me._ht_node_image0.onmouseenter=function (e) {
			me._ht_node_image0__img.style.visibility='hidden';
			me._ht_node_image0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image0']=true;
		}
		me._ht_node_image0.onmouseleave=function (e) {
			me._ht_node_image0__img.style.visibility='inherit';
			me._ht_node_image0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image0']=false;
		}
		me._ht_node_image0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_node_image0);
		el=me._ht_node_customimage1=document.createElement('div');
		els=me._ht_node_customimage1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage1.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage1.ggAltText));
			me._ht_node_customimage1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage1.ggText_untranslated = img;
			me._ht_node_customimage1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage1.ggSubElement.style.width = '0px';
			me._ht_node_customimage1.ggSubElement.style.height = '0px';
			me._ht_node_customimage1.ggSubElement.src='';
			me._ht_node_customimage1.ggSubElement.src=me._ht_node_customimage1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage1.ggText != player._(me._ht_node_customimage1.ggText_untranslated)) {
				me._ht_node_customimage1.ggText = player._(me._ht_node_customimage1.ggText_untranslated);
				me._ht_node_customimage1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 90;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage1.style.transition='';
				if (me._ht_node_customimage1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage1.style.visibility="hidden";
					me._ht_node_customimage1.ggSubElement.src='';
					me._ht_node_customimage1.ggVisible=false;
				}
				else {
					me._ht_node_customimage1.style.visibility=(Number(me._ht_node_customimage1.style.opacity)>0||!me._ht_node_customimage1.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage1.ggSubElement.src=me._ht_node_customimage1.ggText;
					me._ht_node_customimage1.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage1.logicBlock_visible();
		me._ht_node_customimage1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage1.clientWidth;
			var parentHeight = me._ht_node_customimage1.clientHeight;
			var img = me._ht_node_customimage1__img;
			var aspectRatioDiv = me._ht_node_customimage1.clientWidth / me._ht_node_customimage1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage1.ggScrollbars || currentWidth < me._ht_node_customimage1.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage1.scrollLeft=currentWidth / 2 - me._ht_node_customimage1.clientWidth / 2;
			}
			if (!me._ht_node_customimage1.ggScrollbars || currentHeight < me._ht_node_customimage1.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage1.scrollTop=currentHeight / 2 - me._ht_node_customimage1.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_node_customimage1);
		el=me._tt_ht_node0=document.createElement('div');
		els=me._tt_ht_node0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node0.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node0.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node0.style.transition='left 0s, top 0s';
				if (me._tt_ht_node0.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node0.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_node0.style.top='-47px';
				}
				else {
					me._tt_ht_node0.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_node0.style.top='24px';
				}
			}
		}
		me._tt_ht_node0.logicBlock_position();
		me._tt_ht_node0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node0.style.transition='left 0s, top 0s';
				if (me._tt_ht_node0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node0.style.visibility=(Number(me._tt_ht_node0.style.opacity)>0||!me._tt_ht_node0.style.opacity)?'inherit':'hidden';
					me._tt_ht_node0.ggVisible=true;
				}
				else if (me._tt_ht_node0.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node0.style.visibility=(Number(me._tt_ht_node0.style.opacity)>0||!me._tt_ht_node0.style.opacity)?'inherit':'hidden';
					me._tt_ht_node0.ggVisible=true;
				}
				else if (me._tt_ht_node0.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node0.style.visibility=(Number(me._tt_ht_node0.style.opacity)>0||!me._tt_ht_node0.style.opacity)?'inherit':'hidden';
					me._tt_ht_node0.ggVisible=true;
				}
				else {
					me._tt_ht_node0.style.visibility="hidden";
					me._tt_ht_node0.ggVisible=false;
				}
			}
		}
		me._tt_ht_node0.logicBlock_visible();
		me._tt_ht_node0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._tt_ht_node0);
		el=me._hotspot_preview0=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 108px;';
		hs+='left : calc(50% - ((157px + 0px) / 2) + 4px);';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 157px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview0.style.transition='';
				if (me._hotspot_preview0.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview0.style.visibility=(Number(me._hotspot_preview0.style.opacity)>0||!me._hotspot_preview0.style.opacity)?'inherit':'hidden';
					me._hotspot_preview0.ggVisible=true;
				}
				else {
					me._hotspot_preview0.style.visibility="hidden";
					me._hotspot_preview0.ggVisible=false;
				}
			}
		}
		me._hotspot_preview0.logicBlock_visible();
		me._hotspot_preview0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_0=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 100;';
		hs+='background : rgba(39,39,39,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='cursor : default;';
		hs+='height : 107px;';
		hs+='left : calc(50% - ((156px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_picture_frame_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_preview_picture_frame_0);
		el=me._ht_preview_nodeimage0=document.createElement('div');
		els=me._ht_preview_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_preview_nodeimage0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 87px;';
		hs+='left : calc(50% - ((141px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_preview_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_preview_nodeimage0);
		el=me._ht_tooltip0=document.createElement('div');
		els=me._ht_tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : 11px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip0.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_tooltip0.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip0.style.transition='';
				if (me._ht_tooltip0.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip0.style.visibility="hidden";
					me._ht_tooltip0.ggVisible=false;
				}
				else {
					me._ht_tooltip0.style.visibility=(Number(me._ht_tooltip0.style.opacity)>0||!me._ht_tooltip0.style.opacity)?'inherit':'hidden';
					me._ht_tooltip0.ggVisible=true;
				}
			}
		}
		me._ht_tooltip0.logicBlock_visible();
		me._ht_tooltip0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_tooltip0);
		el=me._ht_checkmark_tick0=document.createElement('div');
		els=me._ht_checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_checkmark_tick0__img.setAttribute('src',basePath + 'images/ht_checkmark_tick0.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick0.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick0.style.transition='';
				if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick0.style.visibility=(Number(me._ht_checkmark_tick0.style.opacity)>0||!me._ht_checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick0.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick0.style.visibility="hidden";
					me._ht_checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick0.logicBlock_visible();
		me._ht_checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_checkmark_tick0);
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs=basePath + 'images/image_20.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 16px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._image_20);
		me._ht_image.appendChild(me._hotspot_preview0);
		el=me._popup_image=document.createElement('div');
		el.ggId="popup_image";
		el.ggDx=245;
		el.ggDy=110;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 245px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 2px) / 2) + 110px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_image=document.createElement('div');
		els=me._external_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_image.ggSubElement.setAttribute('alt', player._(me._external_image.ggAltText));
			me._external_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_image.ggText_untranslated = img;
			me._external_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_image.ggSubElement.style.width = '0px';
			me._external_image.ggSubElement.style.height = '0px';
			me._external_image.ggSubElement.src='';
			me._external_image.ggSubElement.src=me._external_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_image.ggText != player._(me._external_image.ggText_untranslated)) {
				me._external_image.ggText = player._(me._external_image.ggText_untranslated);
				me._external_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._external_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._external_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._external_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._external_image.style.transition='';
				if (me._external_image.ggCurrentLogicStateVisible == 0) {
					me._external_image.style.visibility="hidden";
					me._external_image.ggSubElement.src='';
					me._external_image.ggVisible=false;
				}
				else {
					me._external_image.style.visibility=(Number(me._external_image.style.opacity)>0||!me._external_image.style.opacity)?'inherit':'hidden';
					me._external_image.ggSubElement.src=me._external_image.ggText;
					me._external_image.ggVisible=true;
				}
			}
		}
		me._external_image.logicBlock_visible();
		me._external_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_image.clientWidth;
			var parentHeight = me._external_image.clientHeight;
			var img = me._external_image__img;
			var aspectRatioDiv = me._external_image.clientWidth / me._external_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_image.ggScrollbars || currentWidth < me._external_image.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_image.ggScrollbars || currentHeight < me._external_image.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._popup_image.appendChild(me._external_image);
		me._ht_image.appendChild(me._popup_image);
		me.elementMouseOver['ht_image']=false;
		me._ht_node_visited0.logicBlock_visible();
		me.elementMouseOver['ht_node_visited0']=false;
		me._ht_node_image0.logicBlock_visible();
		me.elementMouseOver['ht_node_image0']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage1.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage1.logicBlock_visible();
		me._tt_ht_node0.logicBlock_position();
		me._tt_ht_node0.logicBlock_visible();
		me._hotspot_preview0.logicBlock_visible();
		me._ht_tooltip0.logicBlock_visible();
		me._ht_checkmark_tick0.logicBlock_visible();
		me._external_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_image0.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
				me._tt_ht_node0.logicBlock_visible();
				me._ht_tooltip0.logicBlock_visible();
				me._external_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_image0.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
				me._tt_ht_node0.logicBlock_visible();
				me._hotspot_preview0.logicBlock_visible();
				me._ht_tooltip0.logicBlock_visible();
				me._ht_checkmark_tick0.logicBlock_visible();
				me._ht_checkmark_tick0.logicBlock_visible();
				me._external_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_image0.logicBlock_visible();
				me._ht_checkmark_tick0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_image0.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
				me._tt_ht_node0.logicBlock_position();
				me._tt_ht_node0.logicBlock_visible();
				me._hotspot_preview0.logicBlock_visible();
				me._ht_tooltip0.logicBlock_visible();
				me._external_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_node0.logicBlock_position();
			};
			me.ggEvent_varchanged_opt_hotspot_preview=function() {
				me._tt_ht_node0.logicBlock_visible();
				me._hotspot_preview0.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_description(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_description=document.createElement('div');
		el.ggId="ht_description";
		el.ggDx=-246;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 110;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 246px);';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_description.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_description.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_description.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_description.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.setVariableValue('esconder_cursor', true);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility=(Number(skin._maozinha.style.opacity)>0||!skin._maozinha.style.opacity)?'inherit':'hidden';
			skin._maozinha.ggVisible=true;
			skin._seta.style.transition='none';
			skin._seta.style.visibility='hidden';
			skin._seta.ggVisible=false;
			me.elementMouseOver['ht_description']=true;
			me._tt_ht_node1.logicBlock_visible();
			me._hotspot_preview1.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_description.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			skin._maozinha.style.transition='none';
			skin._maozinha.style.visibility='hidden';
			skin._maozinha.ggVisible=false;
			skin._seta.style.transition='none';
			skin._seta.style.visibility=(Number(skin._seta.style.opacity)>0||!skin._seta.style.opacity)?'inherit':'hidden';
			skin._seta.ggVisible=true;
			me.elementMouseOver['ht_description']=false;
			me._tt_ht_node1.logicBlock_visible();
			me._hotspot_preview1.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_description.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited1=document.createElement('div');
		els=me._ht_node_visited1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICBDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUgICBjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQtMS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBs'+
			'Ny4yLDcuMkwtMTY3LjksMzY2LjZ6ICAgIE0tMTU0LjksMzk0YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjV2MTEuNGMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN0wtMTU0LjksMzk0eiBNLTE1NC42LDM4MyAgIGMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjIgICBjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC'+
			'0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCAgIGMtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjljMC45LTAuOSwyLjQtMC45LDMuMywwbDEwLDkuN0wtMTY3LDQwMy40eiBNLTEzNy45LDQyMCAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgIGMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMw'+
			'LTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMgICBsLTQuMSw0LjFjLTcuOC0wLjktMTUuMS0yLjYtMjEuMS01djM4LjljOC45LTMuNiwyMC42LTUuNiwzMi42LTUuNmMxMiwwLDIzLjYsMiwzMi42LDUuNnYtMzguOWMtOC45LDMuNi0yMC42LDUuNi0zMi42LDUuNiAgIGMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMTM3LjksNDIweiIgZmlsbD0iIzAwMDAwMCIvPgogPC'+
			'9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43ICAgIEMtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDUuOCw0MDcuM3Y2LjdjOC44LTMuMSwxOS42LTQuOCwzMC44LTQuOGMwLjcsMCwxLjMsMCwyLDBsNC4yLTQuMWMtMi0wLjEtNC4xLTAuMS02LjItMC4xICAgIEMtMTg2LjMsNDA1LTE5Ny4zLDQwNS44LTIwNS44LDQwNy4zeiIgZmlsbD0iI0ZGRkZGRiIv'+
			'PgogICA8cGF0aCBkPSJNLTE0NC4yLDQxMy45di0xMS40bC04LjctOC41Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMiAgICBDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkgICAgQy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTkuOC'+
			'wzODQuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMS4yLDEuMmMtMC41LDAuNS0wLjUsMS40LDAsMmw3LjgsNy44YzAuNSwwLjUsMS43LDEuNSwyLDEuNSAgICBjMC4zLDAuMSwwLjgsMC4xLDEuMSwwYzAuMy0wLjEsMS40LTEsMi0xLjVsMjUuMy0yNS4zYzAuNS0wLjUsMC41LTEuNCwwLTJsLTEuMi0xLjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTI0LjcsMjQuNyAgICBMLTE5OS44LDM4NC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTguNiw2LjEtMzAsNi41bC00LjYsNC42YzAuMiwwLDAuNSwwLDAu'+
			'NywwICAgIGMxMiwwLDIzLjYtMiwzMi42LTUuNnYzOC45Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjljNiwyLjQsMTMuMyw0LjEsMjEuMSw1bDQuMS00LjEgICAgYy0xMC4xLTAuNy0xOS41LTIuOS0yNi41LTYuM2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjkgICAgYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLj'+
			'ItMC4xICAgIGMwLjctMC40LDEuMS0xLjEsMS4xLTEuOXYtNDUuOEMtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_visited1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMiAgIGMtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0xLjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMt'+
			'MS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGw4LDhMLTE2Ny4xLDM2My4yeiBNLTE1Mi43LDM5My43YzAuMy0wLjMsMC43LTAuNSwxLjEtMC41czAuOCwwLjIsMS4xLDAuNGw5LjYsOS40djEyLjcgICBjLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUgICBDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLD'+
			'UuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICBjMi4zLDAsNC42LDAsNi45LDAuMUwtMTcyLjgsNDEwLjV6IE0tMTY2LjIsNDA0LjFjLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40YzEtMSwyLjYtMSwzLjcsMCAgIGwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICBzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4z'+
			'LTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xICAgYzAuNy0wLjUsMS42LTAuNSwyLjQtMC4xYzcuOCwzLjgsMTguMiw2LjIsMjkuNCw3bC00LjYsNC42Yy04LjYtMC45LTE2LjctMi44LTIzLjQtNS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjIgICBzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMSAgIGMwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsND'+
			'IyLjVMLTEzMy44LDQyMi41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCAgICBDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0wLjEtNi45LTAuMSAgICBD'+
			'LTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkgICAgQy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3LjctMTUzLjUsMzg4Lj'+
			'gtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43ICAgIGMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUgICAgTC0yMDIuNiwzODIuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUt'+
			'MS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiAgICBjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xICAgIGMwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLD'+
			'EuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xICAgIHMxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited1.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited1.style.transition='';
				if (me._ht_node_visited1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited1.style.visibility=(Number(me._ht_node_visited1.style.opacity)>0||!me._ht_node_visited1.style.opacity)?'inherit':'hidden';
					me._ht_node_visited1.ggVisible=true;
				}
				else {
					me._ht_node_visited1.style.visibility="hidden";
					me._ht_node_visited1.ggVisible=false;
				}
			}
		}
		me._ht_node_visited1.logicBlock_visible();
		me._ht_node_visited1.onmouseenter=function (e) {
			me._ht_node_visited1__img.style.visibility='hidden';
			me._ht_node_visited1__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited1']=true;
		}
		me._ht_node_visited1.onmouseleave=function (e) {
			me._ht_node_visited1__img.style.visibility='inherit';
			me._ht_node_visited1__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited1']=false;
		}
		me._ht_node_visited1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_description.appendChild(me._ht_node_visited1);
		el=me._ht_node_image1=document.createElement('div');
		els=me._ht_node_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xICAgIEMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNiAgICBjLTEyLjgsMC0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yYy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMS45di00NS44YzAt'+
			'MC44LDAuNC0xLjUsMS4xLTEuOSAgICBjMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjZjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45ICAgIEMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYgICAgQy0xODcsMzgzLjMtMTk4LjYsMzgxLj'+
			'ItMjA3LjYsMzc3Ljd6IE0tMTc1LDQwOS4xYy0xMS4xLDAtMjIsMS43LTMwLjgsNC44di02LjdjOC41LTEuNCwxOS40LTIuMywzMC44LTIuM2MyLjEsMCw0LjEsMCw2LjIsMC4xICAgIGwtNC4yLDQuMUMtMTczLjcsNDA5LjItMTc0LjMsNDA5LjEtMTc1LDQwOS4xeiBNLTE0NC4yLDQxMy45Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43bDE1LjYtMTUuMmMwLjMtMC4zLDAuNi0wLjQsMS0wLjQgICAgYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0wLjQsNC40LDAuNiw0LjcsMi4zICAgIGMwLjMs'+
			'MS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMuMiwzODkuOWwxMCw5LjdsLTMuOCwzLjcgICAgYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOUMtMTc1LjYsMzg5LTE3NC4xLDM4OS0xNzMuMiwzODkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjcsNDAzLjhjNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2'+
			'wtMTAtOS43Yy0wLjktMC45LTIuNC0wLjktMy4zLDAgICAgTC0xOTAuNyw0MDMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjEgICAgQy0xNzAuOSw0MDUtMTcyLjksNDA1LTE3NSw0MDV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUzLjksMzkzLjZjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMmM5LjUsMC40LDE4LjcsMiwyNi4zLDQuN3YtMTEuNGwtOC43LTguNSAgICBDLTE1My4yLDM5My44LTE1'+
			'My41LDM5My42LTE1My45LDM5My42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTguNyw0LjItMjEsNi42LTMzLjgsNi42Yy0xMi45LDAtMjUuMi0yLjQtMzMuOC02LjYgICAgYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yICAgIGM4LjctNC4yLDIxLTYuNiwzMy44LTYuNmMxMi44LDAsMjUuMiwyLjQsMzMuOCw2LjZjMC43LDAuMywxLjUsMC4zLDIuMi'+
			'0wLjFjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjggICAgQy0xMzcuOSwzNzMuNC0xMzguMywzNzIuNy0xMzksMzcyLjN6IE0tMTQyLjQsNDE2LjVjLTguOS0zLjYtMjAuNi01LjYtMzIuNi01LjZzLTIzLjYsMi0zMi42LDUuNnYtMzguOSAgICBjOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45ICAgIEMtMTU3LjgsMzg4LjYtMTU1Ljcs'+
			'Mzg5LjYtMTUzLjQsMzg5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC43Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICAgcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAuMi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUtMS4yLTEuMy0xLjItMi4x'+
			'di01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMSAgICBjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjOS42LDQuNiwyMy4zLDcuMywzNy42LDcuM2MxNC4zLDAsMjgtMi43LDM3LjYtNy4zYzAuOC0wLjQsMS43LTAuMywyLjQsMC4xYzAuNywwLjUsMS4yLDEuMywxLjIsMi4xICAgIEMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMiw2LjIgICAgQy0xODguMywzODEuNy0yMD'+
			'EuMywzNzkuNS0yMTEuMiwzNzUuNXogTS0xNzUsNDEwLjVjLTEyLjQsMC0yNC40LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICAgYzIuMywwLDQuNiwwLDYuOSwwLjFsLTQuNiw0LjVDLTE3My41LDQxMC41LTE3NC4zLDQxMC41LTE3NSw0MTAuNXogTS0xNDAuOCw0MTUuOGMtOC40LTMtMTguNi00LjgtMjkuMi01LjJsMTcuMy0xNi45ICAgIGMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjUg'+
			'ICAgYzAuNCwxLjktMS40LDMuOC0zLjksNC4zYy0yLjUsMC41LTQuOS0wLjYtNS4zLTIuNUMtMTU2LjYsMzgzLjktMTU0LjgsMzgyLTE1Mi4zLDM4MS41eiBNLTE3MywzODkuMWwxMS4xLDEwLjhsLTQuMiw0LjEgICAgYy0yLjktMC4xLTUuOS0wLjItOC44LTAuMmMtNiwwLTExLjgsMC4yLTE3LjQsMC42bDE1LjgtMTUuNEMtMTc1LjYsMzg4LjEtMTc0LDM4OC4xLTE3MywzODkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjQsNDA0LjVjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4Lj'+
			'gsMC4ybDQuMi00LjFsLTExLjEtMTAuOGMtMS0xLTIuNi0xLTMuNiwwICAgIEwtMTkyLjQsNDA0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNSAgICBDLTE3MC40LDQwNS45LTE3Mi43LDQwNS45LTE3NSw0MDUuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTEuNiwzOTMuMmMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjljMTAuNiwwLjQsMjAuOCwyLjMsMjkuMiw1LjJ2LTEyLjdsLTku'+
			'Ni05LjQgICAgQy0xNTAuNywzOTMuNC0xNTEuMSwzOTMuMi0xNTEuNiwzOTMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy05LjYsNC42LTIzLjMsNy4zLTM3LjYsNy4zcy0yOC0yLjctMzcuNi03LjMgICAgYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yICAgIGM5LjYtNC42LDIzLjMtNy4zLDM3LjYtNy4zYzE0LjMsMCwyOCwyLjcsMzcuNiw3Lj'+
			'NjMC44LDAuNCwxLjcsMC4zLDIuNC0wLjFzMS4yLTEuMywxLjItMi4xdi01MC45ICAgIEMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXogTS0xMzguOCw0MTguN2MtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzkuOSw0LDIyLjksNi4yLDM2LjIsNi4yICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMzg3'+
			'LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image1.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image1.style.transition='';
				if (me._ht_node_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image1.style.visibility="hidden";
					me._ht_node_image1.ggVisible=false;
				}
				else {
					me._ht_node_image1.style.visibility=(Number(me._ht_node_image1.style.opacity)>0||!me._ht_node_image1.style.opacity)?'inherit':'hidden';
					me._ht_node_image1.ggVisible=true;
				}
			}
		}
		me._ht_node_image1.logicBlock_visible();
		me._ht_node_image1.onmouseenter=function (e) {
			me._ht_node_image1__img.style.visibility='hidden';
			me._ht_node_image1__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image1']=true;
		}
		me._ht_node_image1.onmouseleave=function (e) {
			me._ht_node_image1__img.style.visibility='inherit';
			me._ht_node_image1__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image1']=false;
		}
		me._ht_node_image1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_description.appendChild(me._ht_node_image1);
		el=me._ht_node_customimage2=document.createElement('div');
		els=me._ht_node_customimage2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage2.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage2.ggAltText));
			me._ht_node_customimage2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage2.ggText_untranslated = img;
			me._ht_node_customimage2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage2.ggSubElement.style.width = '0px';
			me._ht_node_customimage2.ggSubElement.style.height = '0px';
			me._ht_node_customimage2.ggSubElement.src='';
			me._ht_node_customimage2.ggSubElement.src=me._ht_node_customimage2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage2.ggText != player._(me._ht_node_customimage2.ggText_untranslated)) {
				me._ht_node_customimage2.ggText = player._(me._ht_node_customimage2.ggText_untranslated);
				me._ht_node_customimage2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 90;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage2.style.transition='';
				if (me._ht_node_customimage2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage2.style.visibility="hidden";
					me._ht_node_customimage2.ggSubElement.src='';
					me._ht_node_customimage2.ggVisible=false;
				}
				else {
					me._ht_node_customimage2.style.visibility=(Number(me._ht_node_customimage2.style.opacity)>0||!me._ht_node_customimage2.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage2.ggSubElement.src=me._ht_node_customimage2.ggText;
					me._ht_node_customimage2.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage2.logicBlock_visible();
		me._ht_node_customimage2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage2.clientWidth;
			var parentHeight = me._ht_node_customimage2.clientHeight;
			var img = me._ht_node_customimage2__img;
			var aspectRatioDiv = me._ht_node_customimage2.clientWidth / me._ht_node_customimage2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage2.ggScrollbars || currentWidth < me._ht_node_customimage2.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage2.scrollLeft=currentWidth / 2 - me._ht_node_customimage2.clientWidth / 2;
			}
			if (!me._ht_node_customimage2.ggScrollbars || currentHeight < me._ht_node_customimage2.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage2.scrollTop=currentHeight / 2 - me._ht_node_customimage2.clientHeight / 2;
			}
		}
		me._ht_description.appendChild(me._ht_node_customimage2);
		el=me._tt_ht_node1=document.createElement('div');
		els=me._tt_ht_node1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 110;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node1.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node1.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node1.style.transition='left 0s, top 0s';
				if (me._tt_ht_node1.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node1.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_node1.style.top='-47px';
				}
				else {
					me._tt_ht_node1.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_node1.style.top='24px';
				}
			}
		}
		me._tt_ht_node1.logicBlock_position();
		me._tt_ht_node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_description'] == true)) && 
				((player._(me.hotspot.description) == "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_description'] == true)) && 
				((player._(me.hotspot.description) == "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_description'] == true)) && 
				((player._(me.hotspot.description) == "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node1.style.transition='left 0s, top 0s';
				if (me._tt_ht_node1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node1.style.visibility=(Number(me._tt_ht_node1.style.opacity)>0||!me._tt_ht_node1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node1.ggVisible=true;
				}
				else if (me._tt_ht_node1.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node1.style.visibility=(Number(me._tt_ht_node1.style.opacity)>0||!me._tt_ht_node1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node1.ggVisible=true;
				}
				else if (me._tt_ht_node1.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node1.style.visibility=(Number(me._tt_ht_node1.style.opacity)>0||!me._tt_ht_node1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node1.ggVisible=true;
				}
				else {
					me._tt_ht_node1.style.visibility="hidden";
					me._tt_ht_node1.ggVisible=false;
				}
			}
		}
		me._tt_ht_node1.logicBlock_visible();
		me._tt_ht_node1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_description.appendChild(me._tt_ht_node1);
		el=me._hotspot_preview1=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggDy=-118;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 110;';
		hs+='height : 190px;';
		hs+='left : calc(50% - ((276px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((190px + 0px) / 2) - 118px);';
		hs+='visibility : hidden;';
		hs+='width : 276px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_description'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview1.style.transition='';
				if (me._hotspot_preview1.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview1.style.visibility=(Number(me._hotspot_preview1.style.opacity)>0||!me._hotspot_preview1.style.opacity)?'inherit':'hidden';
					me._hotspot_preview1.ggVisible=true;
				}
				else {
					me._hotspot_preview1.style.visibility="hidden";
					me._hotspot_preview1.ggVisible=false;
				}
			}
		}
		me._hotspot_preview1.logicBlock_visible();
		me._hotspot_preview1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_1=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 110;';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 1px solid #132959;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 188px;';
		hs+='left : calc(50% - ((278px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((188px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 278px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_picture_frame_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._ht_preview_picture_frame_1);
		el=me._ht_preview_nodeimage1=document.createElement('div');
		els=me._ht_preview_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_preview_nodeimage1_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 6px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: 110;';
		hs+='height : 184px;';
		hs+='left : calc(50% - ((274px + 0px) / 2) + 0px);';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((184px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_nodeimage1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._ht_preview_nodeimage1);
		el=me._ht_tooltip1=document.createElement('div');
		els=me._ht_tooltip1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 110;';
		hs+='color : rgba(19,41,89,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((calc(270px + 2px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : calc(270px + 2px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 1px solid #132959;';
		hs+='border-radius : 4px;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip1.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_tooltip1.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_tooltip1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip1.style.transition='';
				if (me._ht_tooltip1.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip1.style.visibility="hidden";
					me._ht_tooltip1.ggVisible=false;
				}
				else {
					me._ht_tooltip1.style.visibility=(Number(me._ht_tooltip1.style.opacity)>0||!me._ht_tooltip1.style.opacity)?'inherit':'hidden';
					me._ht_tooltip1.ggVisible=true;
				}
			}
		}
		me._ht_tooltip1.logicBlock_visible();
		me._ht_tooltip1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._ht_tooltip1);
		me._ht_description.appendChild(me._hotspot_preview1);
		me.elementMouseOver['ht_description']=false;
		me._ht_node_visited1.logicBlock_visible();
		me.elementMouseOver['ht_node_visited1']=false;
		me._ht_node_image1.logicBlock_visible();
		me.elementMouseOver['ht_node_image1']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage2.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage2.logicBlock_visible();
		me._tt_ht_node1.logicBlock_position();
		me._tt_ht_node1.logicBlock_visible();
		me._hotspot_preview1.logicBlock_visible();
		me._ht_tooltip1.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_image1.logicBlock_visible();
				me._ht_node_customimage2.logicBlock_visible();
				me._tt_ht_node1.logicBlock_visible();
				me._ht_tooltip1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_image1.logicBlock_visible();
				me._ht_node_customimage2.logicBlock_visible();
				me._tt_ht_node1.logicBlock_visible();
				me._hotspot_preview1.logicBlock_visible();
				me._ht_tooltip1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_image1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_image1.logicBlock_visible();
				me._ht_node_customimage2.logicBlock_visible();
				me._tt_ht_node1.logicBlock_position();
				me._tt_ht_node1.logicBlock_visible();
				me._hotspot_preview1.logicBlock_visible();
				me._ht_tooltip1.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_node1.logicBlock_position();
			};
			me.ggEvent_varchanged_opt_hotspot_preview=function() {
				me._tt_ht_node1.logicBlock_visible();
				me._hotspot_preview1.logicBlock_visible();
			};
			me.__div = me._ht_description;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_description') {
				hotspot.skinid = 'ht_description';
				hsinst = new SkinHotspotClass_ht_description(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._maozinha.ggParameter) {
			hs+=parameterToTransform(me._maozinha.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._maozinha.style.transform=hs;
		var hs='';
		if (me._seta.ggParameter) {
			hs+=parameterToTransform(me._seta.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._seta.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } @font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-regular.woff2") format("woff2"); } .hepta_slab { font-family: "Hepta Slab", serif; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};