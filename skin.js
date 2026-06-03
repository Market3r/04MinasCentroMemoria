// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: sal�o de festas minas 1 sede.ggsk
// Generated 2026-03-17T08:58:54

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
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
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
		hs+='bottom : 62px;';
		hs+='height : 146px;';
		hs+='position : absolute;';
		hs+='right : -8px;';
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjQ5NjhjNTI3NTkiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzIuMDM5MDYyIDMyLjAzOTA2MiBMIDc3Ny45NjA5MzggMzIuMDM5MDYyIEwgNzc3Ljk2MDkzOC'+
			'A3NzcuOTYwOTM4IEwgMzIuMDM5MDYyIDc3Ny45NjA5MzggWiBNIDMyLjAzOTA2MiAzMi4wMzkwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjBmNTM3ODQzNmQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDMyLjAzOTA2MiBDIDE5OS4wMTk1MzEgMzIuMDM5MDYyIDMyLjAzOTA2MiAxOTkuMDE5NTMxIDMyLjAzOTA2MiA0MDUgQyAzMi4wMzkwNjIgNjEwLjk4MDQ2OSAxOTkuMDE5NTMxIDc3Ny45NjA5MzggNDA1IDc3Ny45NjA5MzggQyA2MTAuOTgwNDY5IDc3Ny45NjA5MzggNzc3Ljk2MDkzOCA2MTAuOTgwNDY5IDc3Ny45NjA5MzggNDA1IEMgNzc3'+
			'Ljk2MDkzOCAxOTkuMDE5NTMxIDYxMC45ODA0NjkgMzIuMDM5MDYyIDQwNSAzMi4wMzkwNjIgWiBNIDQwNSAzMi4wMzkwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImNjYmNjOWM2ZTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC4wMzkwNjI1IDAuMDM5MDYyNSBMIDc0NS45NjA5MzggMC4wMzkwNjI1IEwgNzQ1Ljk2MDkzOCA3NDUuOTYwOTM4IEwgMC4wMzkwNjI1IDc0NS45NjA5MzggWiBNIDAuMDM5MDYyNSAwLjAzOTA2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjhjZDEzOTA1NzYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbn'+
			'plcm8iIGQ9Ik0gMzczIDAuMDM5MDYyNSBDIDE2Ny4wMTk1MzEgMC4wMzkwNjI1IDAuMDM5MDYyNSAxNjcuMDE5NTMxIDAuMDM5MDYyNSAzNzMgQyAwLjAzOTA2MjUgNTc4Ljk4MDQ2OSAxNjcuMDE5NTMxIDc0NS45NjA5MzggMzczIDc0NS45NjA5MzggQyA1NzguOTgwNDY5IDc0NS45NjA5MzggNzQ1Ljk2MDkzOCA1NzguOTgwNDY5IDc0NS45NjA5MzggMzczIEMgNzQ1Ljk2MDkzOCAxNjcuMDE5NTMxIDU3OC45ODA0NjkgMC4wMzkwNjI1IDM3MyAwLjAzOTA2MjUgWiBNIDM3MyAwLjAzOTA2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjEwN2VmN2E3NjciPgogICA8cmVjdCB3'+
			'aWR0aD0iNzQ2IiBoZWlnaHQ9Ijc0NiIgeD0iMCIgeT0iMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI3ZDUzZmM1OWNkIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDE3NC41NjY0MDYgMTczLjMwMDc4MSBMIDYzNS4wNjY0MDYgMTczLjMwMDc4MSBMIDYzNS4wNjY0MDYgNjM2LjgwMDc4MSBMIDE3NC41NjY0MDYgNjM2LjgwMDc4MSBaIE0gMTc0LjU2NjQwNiAxNzMuMzAwNzgxICIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBjbGlwLXBhdGg9InVybCgjNDk2OGM1Mjc1OSkiPgogIDxnIGNsaXAtcGF0aD0idXJsKCMwZjUzNzg0MzZkKSI+CiAgIDxnIH'+
			'RyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDMyLCAzMikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzEwN2VmN2E3NjcpIj4KICAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2NiY2M5YzZlNykiPgogICAgICA8ZyBjbGlwLXBhdGg9InVybCgjOGNkMTM5MDU3NikiPgogICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMDM5MDYyNSAwLjAzOTA2MjUgTCA3NDUuOTYwOTM4IDAuMDM5MDYyNSBMIDc0NS45NjA5MzggNzQ1Ljk2MDkzOCBMIDAuMDM5MDYyNSA3NDUuOTYwOTM4IFogTSAwLjAzOTA2MjUgMC4wMzkwNjI1ICIgZmlsbD0iIzI3MjcyNyIgZmlsbC1vcGFjaXR5PSIw'+
			'Ljg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzdkNTNmYzU5Y2QpIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gNTY4LjIzNDM3NSAyNDAuODI0MjE5IEMgNTI0LjkxNzk2OSAxOTcuNDYwOTM4IDQ2Ny4zMTY0MDYgMTczLjUzOTA2MiA0MDUuOTM3NSAxNzMuNTM5MDYyIEMgMjc5LjQ2ODc1IDE3My41MzkwNjIgMTc2LjUzNTE1NiAyNzYuNDQ5MjE5IDE3Ni40ODgyODEgNDAyLjk2MDkzOCBDIDE3Ni40ODgyODEgNDQzLjM5NDUzMSAxODcuMDQyOTY5IDQ4Mi44ODY3MTkgMjA3LjEyMT'+
			'A5NCA1MTcuNjY0MDYyIEwgMTc0LjU2NjQwNiA2MzYuNTU0Njg4IEwgMjk2LjIwMzEyNSA2MDQuNjM2NzE5IEMgMzI5LjcyMjY1NiA2MjIuOTI5Njg4IDM2Ny40NTMxMjUgNjMyLjU0Njg3NSA0MDUuODQzNzUgNjMyLjU3MDMxMiBMIDQwNS45Mzc1IDYzMi41NzAzMTIgQyA1MzIuMzgyODEyIDYzMi41NzAzMTIgNjM1LjMzOTg0NCA1MjkuNjM2NzE5IDYzNS4zNTkzNzUgNDAzLjE0NDUzMSBDIDYzNS4zNTkzNzUgMzQxLjgzNTkzOCA2MTEuNTUwNzgxIDI4NC4yMTA5MzggNTY4LjIxMDkzOCAyNDAuODI0MjE5IFogTSA0MDUuOTM3NSA1OTMuODMyMDMxIEwgNDA1Ljg2NzE4OCA1OTMuODMyMDMxIEMg'+
			'MzcxLjY2NDA2MiA1OTMuODMyMDMxIDMzOC4wNzgxMjUgNTg0LjYyODkwNiAzMDguNzk2ODc1IDU2Ny4yNTM5MDYgTCAzMDEuODM1OTM4IDU2My4xMDkzNzUgTCAyMjkuNjQ4NDM4IDU4Mi4wNDI5NjkgTCAyNDguOTA2MjUgNTExLjY2NDA2MiBMIDI0NC4zNzEwOTQgNTA0LjQ1MzEyNSBDIDIyNS4yNzczNDQgNDc0LjA5Mzc1IDIxNS4yMDMxMjUgNDM4Ljk5NjA5NCAyMTUuMjI2NTYyIDQwMi45NjA5MzggQyAyMTUuMjczNDM4IDI5Ny44MzIwMzEgMzAwLjgyODEyNSAyMTIuMjczNDM4IDQwNi4wMDM5MDYgMjEyLjI3MzQzOCBDIDQ1Ni45NDUzMTIgMjEyLjI3MzQzOCA1MDQuODE2NDA2IDIzMi4xND'+
			'g0MzggNTQwLjgzMjAzMSAyNjguMjA3MDMxIEMgNTc2Ljg0Mzc1IDMwNC4yNDIxODggNTk2LjY0ODQzOCAzNTIuMTYwMTU2IDU5Ni42MjUgNDAzLjEyMTA5NCBDIDU5Ni41NzgxMjUgNTA4LjI3NzM0NCA1MTEuMDIzNDM4IDU5My44MzIwMzEgNDA1LjkxNDA2MiA1OTMuODMyMDMxIFogTSA1MTAuNTQyOTY5IDQ1MS4wMTU2MjUgQyA1MDQuODE2NDA2IDQ0OC4xNTYyNSA0NzYuNjMyODEyIDQzNC4yODEyNSA0NzEuMzY3MTg4IDQzMi4zODI4MTIgQyA0NjYuMTAxNTYyIDQzMC40NTcwMzEgNDYyLjMwMDc4MSA0MjkuNTE5NTMxIDQ1OC40ODA0NjkgNDM1LjI0MjE4OCBDIDQ1NC42NTYyNSA0NDAuOTg4'+
			'MjgxIDQ0My42Njc5NjkgNDUzLjkwMjM0NCA0NDAuMzI0MjE5IDQ1Ny43MjY1NjIgQyA0MzYuOTgwNDY5IDQ2MS41NTA3ODEgNDMzLjY0MDYyNSA0NjIuMDMxMjUgNDI3Ljg5MDYyNSA0NTkuMTQ0NTMxIEMgNDIyLjE2Nzk2OSA0NTYuMjg1MTU2IDQwMy42OTE0MDYgNDUwLjIxNDg0NCAzODEuNzgxMjUgNDMwLjY4NzUgQyAzNjQuNzUgNDE1LjQ4NDM3NSAzNTMuMjM0Mzc1IDM5Ni43MTA5MzggMzQ5Ljg5MDYyNSAzOTAuOTY0ODQ0IEMgMzQ2LjU0Njg3NSAzODUuMjE4NzUgMzQ5LjU0Njg3NSAzODIuMTI4OTA2IDM1Mi40MTAxNTYgMzc5LjI2NTYyNSBDIDM1NC45NzI2NTYgMzc2LjcwMzEyNSAzNT'+
			'guMTMyODEyIDM3Mi41NTg1OTQgMzYxLjAxOTUzMSAzNjkuMjE0ODQ0IEMgMzYzLjg3ODkwNiAzNjUuODc1IDM2NC44Mzk4NDQgMzYzLjQ2ODc1IDM2Ni43NDIxODggMzU5LjY0NDUzMSBDIDM2OC42NjQwNjIgMzU1LjgyNDIxOSAzNjcuNzAzMTI1IDM1Mi40ODA0NjkgMzY2LjI2MTcxOSAzNDkuNTkzNzUgQyAzNjQuODIwMzEyIDM0Ni43MzQzNzUgMzUzLjM3MTA5NCAzMTguNTAzOTA2IDM0OC41ODU5MzggMzA3LjAzNTE1NiBDIDM0My45Mzc1IDI5NS44NjMyODEgMzM5LjE5OTIxOSAyOTcuMzc1IDMzNS42OTUzMTIgMjk3LjE5MTQwNiBDIDMzMi4zNTU0NjkgMjk3LjAzMTI1IDMyOC41MzEyNSAy'+
			'OTYuOTg0Mzc1IDMyNC43MDcwMzEgMjk2Ljk4NDM3NSBDIDMyMC44ODI4MTIgMjk2Ljk4NDM3NSAzMTQuNjc5Njg4IDI5OC40MDIzNDQgMzA5LjQxNDA2MiAzMDQuMTQ4NDM4IEMgMzA0LjE0ODQzOCAzMDkuODk4NDM4IDI4OS4zNTkzNzUgMzIzLjc2OTUzMSAyODkuMzU5Mzc1IDM1MS45NzY1NjIgQyAyODkuMzU5Mzc1IDM4MC4xODM1OTQgMzA5Ljg5NDUzMSA0MDcuNDQ5MjE5IDMxMi43ODEyNSA0MTEuMjk2ODc1IEMgMzE1LjY0MDYyNSA0MTUuMTIxMDk0IDM1My4yMTA5MzggNDczLjAxOTUzMSA0MTAuNzIyNjU2IDQ5Ny44NTkzNzUgQyA0MjQuMzkwNjI1IDUwMy43NjU2MjUgNDM1LjA4MjAzMS'+
			'A1MDcuMjkyOTY5IDQ0My40MTQwNjIgNTA5Ljk0OTIxOSBDIDQ1Ny4xNTIzNDQgNTE0LjMyMDMxMiA0NjkuNjUyMzQ0IDUxMy43MDMxMjUgNDc5LjUxOTUzMSA1MTIuMjE0ODQ0IEMgNDkwLjUzMTI1IDUxMC41NjY0MDYgNTEzLjQyNTc4MSA0OTguMzM5ODQ0IDUxOC4yMTA5MzggNDg0Ljk0NTMxMiBDIDUyMi45OTYwOTQgNDcxLjU1NDY4OCA1MjIuOTk2MDk0IDQ2MC4wODIwMzEgNTIxLjU1NDY4OCA0NTcuNjc5Njg4IEMgNTIwLjEwOTM3NSA0NTUuMjc3MzQ0IDUxNi4yODkwNjIgNDUzLjg1NTQ2OSA1MTAuNTYyNSA0NTAuOTcyNjU2IFogTSA1MTAuNTQyOTY5IDQ1MS4wMTU2MjUgIiBmaWxsPSIj'+
			'ZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_wpp__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_wpp__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjEwOTBhOTI3MWEiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNi4xNjAxNTYgNi4xNjAxNTYgTCA4MDMuODM5ODQ0IDYuMTYwMTU2IEwgODAzLjgzOTg0NCA4MD'+
			'MuODM5ODQ0IEwgNi4xNjAxNTYgODAzLjgzOTg0NCBaIE0gNi4xNjAxNTYgNi4xNjAxNTYgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjJjMDkwOThhMmIiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDYuMTYwMTU2IEMgMTg0LjcyNjU2MiA2LjE2MDE1NiA2LjE2MDE1NiAxODQuNzI2NTYyIDYuMTYwMTU2IDQwNSBDIDYuMTYwMTU2IDYyNS4yNzM0MzggMTg0LjcyNjU2MiA4MDMuODM5ODQ0IDQwNSA4MDMuODM5ODQ0IEMgNjI1LjI3MzQzOCA4MDMuODM5ODQ0IDgwMy44Mzk4NDQgNjI1LjI3MzQzOCA4MDMuODM5ODQ0IDQwNSBDIDgwMy44Mzk4NDQgMTg0'+
			'LjcyNjU2MiA2MjUuMjczNDM4IDYuMTYwMTU2IDQwNSA2LjE2MDE1NiBaIE0gNDA1IDYuMTYwMTU2ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIwZWU4M2JhZjQ1Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMTYwMTU2IDAuMTYwMTU2IEwgNzk3LjgzOTg0NCAwLjE2MDE1NiBMIDc5Ny44Mzk4NDQgNzk3LjgzOTg0NCBMIDAuMTYwMTU2IDc5Ny44Mzk4NDQgWiBNIDAuMTYwMTU2IDAuMTYwMTU2ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0OTA4NTQyYTc0Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM5OSAwLjE2MD'+
			'E1NiBDIDE3OC43MjY1NjIgMC4xNjAxNTYgMC4xNjAxNTYgMTc4LjcyNjU2MiAwLjE2MDE1NiAzOTkgQyAwLjE2MDE1NiA2MTkuMjczNDM4IDE3OC43MjY1NjIgNzk3LjgzOTg0NCAzOTkgNzk3LjgzOTg0NCBDIDYxOS4yNzM0MzggNzk3LjgzOTg0NCA3OTcuODM5ODQ0IDYxOS4yNzM0MzggNzk3LjgzOTg0NCAzOTkgQyA3OTcuODM5ODQ0IDE3OC43MjY1NjIgNjE5LjI3MzQzOCAwLjE2MDE1NiAzOTkgMC4xNjAxNTYgWiBNIDM5OSAwLjE2MDE1NiAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZGI3M2M3Mjc0ZCI+CiAgIDxyZWN0IHdpZHRoPSI3OTgiIGhlaWdodD0iNzk4IiB4PSIw'+
			'IiB5PSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjY2ZmI5ZWIxNGMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMTU4LjU3ODEyNSAxNTcuMjI2NTYyIEwgNjUxLjMyODEyNSAxNTcuMjI2NTYyIEwgNjUxLjMyODEyNSA2NTIuOTc2NTYyIEwgMTU4LjU3ODEyNSA2NTIuOTc2NTYyIFogTSAxNTguNTc4MTI1IDE1Ny4yMjY1NjIgIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCMxMDkwYTkyNzFhKSI+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoIzJjMDkwOThhMmIpIj4KICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMS'+
			'wgNiwgNikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2RiNzNjNzI3NGQpIj4KICAgICA8ZyBjbGlwLXBhdGg9InVybCgjMGVlODNiYWY0NSkiPgogICAgICA8ZyBjbGlwLXBhdGg9InVybCgjNDkwODU0MmE3NCkiPgogICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuMTYwMTU2IDAuMTYwMTU2IEwgNzk3LjgzOTg0NCAwLjE2MDE1NiBMIDc5Ny44Mzk4NDQgNzk3LjgzOTg0NCBMIDAuMTYwMTU2IDc5Ny44Mzk4NDQgWiBNIDAuMTYwMTU2IDAuMTYwMTU2ICIgZmlsbD0iIzI3MjcyNyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAg'+
			'PC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzY2ZmI5ZWIxNGMpIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gNTc5LjU2MjUgMjI5LjQyOTY4OCBDIDUzMy4yNDIxODggMTgzLjA1ODU5NCA0NzEuNjQwNjI1IDE1Ny40NzI2NTYgNDA2LjAwMzkwNiAxNTcuNDcyNjU2IEMgMjcwLjc1NzgxMiAxNTcuNDcyNjU2IDE2MC42ODM1OTQgMjY3LjUyMzQzOCAxNjAuNjMyODEyIDQwMi44MTY0MDYgQyAxNjAuNjMyODEyIDQ0Ni4wNTQ2ODggMTcxLjkyMTg3NSA0ODguMjg5MDYyIDE5My4zOTQ1MzEgNTI1LjQ3NjU2MiBMIDE1OC41NzgxMjUgNjUyLjYxNz'+
			'E4OCBMIDI4OC42NTYyNSA2MTguNDg4MjgxIEMgMzI0LjUgNjM4LjA1MDc4MSAzNjQuODQ3NjU2IDY0OC4zMzIwMzEgNDA1LjkwNjI1IDY0OC4zNTU0NjkgTCA0MDYuMDAzOTA2IDY0OC4zNTU0NjkgQyA1NDEuMjIyNjU2IDY0OC4zNTU0NjkgNjUxLjMyNDIxOSA1MzguMjgxMjUgNjUxLjM0NzY1NiA0MDMuMDExNzE5IEMgNjUxLjM0NzY1NiAzMzcuNDQ1MzEyIDYyNS44ODY3MTkgMjc1LjgyNDIxOSA1NzkuNTM5MDYyIDIyOS40Mjk2ODggWiBNIDQwNi4wMDM5MDYgNjA2LjkzMzU5NCBMIDQwNS45Mjk2ODggNjA2LjkzMzU5NCBDIDM2OS4zNTE1NjIgNjA2LjkzMzU5NCAzMzMuNDM3NSA1OTcuMDg5'+
			'ODQ0IDMwMi4xMjEwOTQgNTc4LjUwNzgxMiBMIDI5NC42Nzk2ODggNTc0LjA3NDIxOSBMIDIxNy40ODQzNzUgNTk0LjMyNDIxOSBMIDIzOC4wNzQyMTkgNTE5LjA2MjUgTCAyMzMuMjI2NTYyIDUxMS4zNTE1NjIgQyAyMTIuODA4NTk0IDQ3OC44ODY3MTkgMjAyLjAzNTE1NiA0NDEuMzUxNTYyIDIwMi4wNTg1OTQgNDAyLjgxNjQwNiBDIDIwMi4xMDkzNzUgMjkwLjM5MDYyNSAyOTMuNjAxNTYyIDE5OC44OTg0MzggNDA2LjA3ODEyNSAxOTguODk4NDM4IEMgNDYwLjU1MDc4MSAxOTguODk4NDM4IDUxMS43NDYwOTQgMjIwLjE0ODQzOCA1NTAuMjU3ODEyIDI1OC43MTA5MzggQyA1ODguNzY5NTMxID'+
			'I5Ny4yNDYwOTQgNjA5Ljk0NTMxMiAzNDguNDg4MjgxIDYwOS45MjE4NzUgNDAyLjk4ODI4MSBDIDYwOS44NzUgNTE1LjQzNzUgNTE4LjM3ODkwNiA2MDYuOTMzNTk0IDQwNS45ODA0NjkgNjA2LjkzMzU5NCBaIE0gNTE3Ljg2NzE4OCA0NTQuMjA3MDMxIEMgNTExLjc0NjA5NCA0NTEuMTQ0NTMxIDQ4MS42MDU0NjkgNDM2LjMwODU5NCA0NzUuOTc2NTYyIDQzNC4yNzczNDQgQyA0NzAuMzQzNzUgNDMyLjIyMjY1NiA0NjYuMjgxMjUgNDMxLjIxODc1IDQ2Mi4xOTE0MDYgNDM3LjMzOTg0NCBDIDQ1OC4xMDE1NjIgNDQzLjQ4NDM3NSA0NDYuMzUxNTYyIDQ1Ny4yOTI5NjkgNDQyLjc3NzM0NCA0NjEu'+
			'Mzc4OTA2IEMgNDM5LjIwMzEyNSA0NjUuNDY4NzUgNDM1LjYyODkwNiA0NjUuOTg0Mzc1IDQyOS40ODQzNzUgNDYyLjg5ODQzOCBDIDQyMy4zNjMyODEgNDU5LjgzNTkzOCA0MDMuNjA1NDY5IDQ1My4zNTE1NjIgMzgwLjE3NTc4MSA0MzIuNDY0ODQ0IEMgMzYxLjk1NzAzMSA0MTYuMjEwOTM4IDM0OS42NDQ1MzEgMzk2LjEzMjgxMiAzNDYuMDcwMzEyIDM4OS45ODgyODEgQyAzNDIuNDk2MDk0IDM4My44NDM3NSAzNDUuNzAzMTI1IDM4MC41MzkwNjIgMzQ4Ljc2MTcxOSAzNzcuNDc2NTYyIEMgMzUxLjUwMzkwNiAzNzQuNzM0Mzc1IDM1NC44ODI4MTIgMzcwLjMwNDY4OCAzNTcuOTY4NzUgMzY2Lj'+
			'czMDQ2OSBDIDM2MS4wMjczNDQgMzYzLjE1NjI1IDM2Mi4wNTQ2ODggMzYwLjU4MjAzMSAzNjQuMDg5ODQ0IDM1Ni40OTYwOTQgQyAzNjYuMTQ0NTMxIDM1Mi40MDYyNSAzNjUuMTE3MTg4IDM0OC44MzIwMzEgMzYzLjU3NDIxOSAzNDUuNzQ2MDk0IEMgMzYyLjAzMTI1IDM0Mi42ODc1IDM0OS43ODkwNjIgMzEyLjUgMzQ0LjY3MTg3NSAzMDAuMjM0Mzc1IEMgMzM5LjcwMzEyNSAyODguMjg1MTU2IDMzNC42MzY3MTkgMjg5LjkwMjM0NCAzMzAuODkwNjI1IDI4OS43MDcwMzEgQyAzMjcuMzE2NDA2IDI4OS41MzUxNTYgMzIzLjIyNjU2MiAyODkuNDg0Mzc1IDMxOS4xMzY3MTkgMjg5LjQ4NDM3NSBD'+
			'IDMxNS4wNTA3ODEgMjg5LjQ4NDM3NSAzMDguNDE0MDYyIDI5MS4wMDM5MDYgMzAyLjc4MTI1IDI5Ny4xNDg0MzggQyAyOTcuMTUyMzQ0IDMwMy4yOTI5NjkgMjgxLjMzNTkzOCAzMTguMTI4OTA2IDI4MS4zMzU5MzggMzQ4LjI5Mjk2OSBDIDI4MS4zMzU5MzggMzc4LjQ1NzAzMSAzMDMuMjk2ODc1IDQwNy42MTcxODggMzA2LjM4MjgxMiA0MTEuNzMwNDY5IEMgMzA5LjQ0MTQwNiA0MTUuODE2NDA2IDM0OS42MTcxODggNDc3LjczNDM3NSA0MTEuMTIxMDk0IDUwNC4zMDA3ODEgQyA0MjUuNzM4MjgxIDUxMC42MTcxODggNDM3LjE3MTg3NSA1MTQuMzg2NzE5IDQ0Ni4wODIwMzEgNTE3LjIyNjU2Mi'+
			'BDIDQ2MC43NzM0MzggNTIxLjkwMjM0NCA0NzQuMTQwNjI1IDUyMS4yNDIxODggNDg0LjY5MTQwNiA1MTkuNjQ4NDM4IEMgNDk2LjQ2ODc1IDUxNy44ODY3MTkgNTIwLjk1MzEyNSA1MDQuODEyNSA1MjYuMDY2NDA2IDQ5MC40OTIxODggQyA1MzEuMTgzNTk0IDQ3Ni4xNjc5NjkgNTMxLjE4MzU5NCA0NjMuOTAyMzQ0IDUyOS42NDQ1MzEgNDYxLjMzMjAzMSBDIDUyOC4xMDE1NjIgNDU4Ljc2MTcxOSA1MjQuMDExNzE5IDQ1Ny4yNDIxODggNTE3Ljg5MDYyNSA0NTQuMTU2MjUgWiBNIDUxNy44NjcxODggNDU0LjIwNzAzMSAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogPC9nPgo8'+
			'L3N2Zz4K';
		me._button_wpp__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_wpp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
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
			player.openUrl("https:\/\/wa.me\/553135161332","_blank");
		}
		me._button_wpp.onmouseenter=function (e) {
			me._button_wpp__img.style.visibility='hidden';
			me._button_wpp__imgo.style.visibility='inherit';
			me.elementMouseOver['button_wpp']=true;
		}
		me._button_wpp.onmouseleave=function (e) {
			me._button_wpp__img.style.visibility='inherit';
			me._button_wpp__imgo.style.visibility='hidden';
			me.elementMouseOver['button_wpp']=false;
		}
		me._button_wpp.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_wpp);
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjEyMmQxYjViYmMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDYuNDE0MDYyIDQ2LjQxNDA2MiBMIDc2My41ODU5MzggNDYuNDE0MDYyIEwgNzYzLjU4NTkzOC'+
			'A3NjMuNTg1OTM4IEwgNDYuNDE0MDYyIDc2My41ODU5MzggWiBNIDQ2LjQxNDA2MiA0Ni40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjFiOGM1OTVkN2YiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDA1IDQ2LjQxNDA2MiBDIDIwNi45NTcwMzEgNDYuNDE0MDYyIDQ2LjQxNDA2MiAyMDYuOTU3MDMxIDQ2LjQxNDA2MiA0MDUgQyA0Ni40MTQwNjIgNjAzLjA0Mjk2OSAyMDYuOTU3MDMxIDc2My41ODU5MzggNDA1IDc2My41ODU5MzggQyA2MDMuMDQyOTY5IDc2My41ODU5MzggNzYzLjU4NTkzOCA2MDMuMDQyOTY5IDc2My41ODU5MzggNDA1IEMgNzYz'+
			'LjU4NTkzOCAyMDYuOTU3MDMxIDYwMy4wNDI5NjkgNDYuNDE0MDYyIDQwNSA0Ni40MTQwNjIgWiBNIDQwNSA0Ni40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjQyODdlZWU4NmUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC40MTQwNjIgMC40MTQwNjIgTCA3MTcuNTg1OTM4IDAuNDE0MDYyIEwgNzE3LjU4NTkzOCA3MTcuNTg1OTM4IEwgMC40MTQwNjIgNzE3LjU4NTkzOCBaIE0gMC40MTQwNjIgMC40MTQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjA1MWM3YWU3NTYiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIG'+
			'Q9Ik0gMzU5IDAuNDE0MDYyIEMgMTYwLjk1NzAzMSAwLjQxNDA2MiAwLjQxNDA2MiAxNjAuOTU3MDMxIDAuNDE0MDYyIDM1OSBDIDAuNDE0MDYyIDU1Ny4wNDI5NjkgMTYwLjk1NzAzMSA3MTcuNTg1OTM4IDM1OSA3MTcuNTg1OTM4IEMgNTU3LjA0Mjk2OSA3MTcuNTg1OTM4IDcxNy41ODU5MzggNTU3LjA0Mjk2OSA3MTcuNTg1OTM4IDM1OSBDIDcxNy41ODU5MzggMTYwLjk1NzAzMSA1NTcuMDQyOTY5IDAuNDE0MDYyIDM1OSAwLjQxNDA2MiBaIE0gMzU5IDAuNDE0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIzNjgxNGRjZGExIj4KICAgPHJlY3Qgd2lkdGg9IjcxOCIgaGVp'+
			'Z2h0PSI3MTgiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iM2I2YTVkY2QyMyI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxNzQuMzc1IDE3NC4zNzUgTCA2MzUuNjI1IDE3NC4zNzUgTCA2MzUuNjI1IDYzNS42MjUgTCAxNzQuMzc1IDYzNS42MjUgWiBNIDE3NC4zNzUgMTc0LjM3NSAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzEyMmQxYjViYmMpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjMWI4YzU5NWQ3ZikiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0NiwgNDYpIj4KICAgID'+
			'xnIGNsaXAtcGF0aD0idXJsKCMzNjgxNGRjZGExKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzQyODdlZWU4NmUpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzA1MWM3YWU3NTYpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjQxNDA2MiAwLjQxNDA2MiBMIDcxNy41ODU5MzggMC40MTQwNjIgTCA3MTcuNTg1OTM4IDcxNy41ODU5MzggTCAwLjQxNDA2MiA3MTcuNTg1OTM4IFogTSAwLjQxNDA2MiAwLjQxNDA2MiAiIGZpbGw9IiMyNzI3MjciIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgog'+
			'IDwvZz4KIDwvZz4KIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgMjgyLjU1ODU5NCBDIDMzNy40ODQzNzUgMjgyLjU1ODU5NCAyODIuNTUwNzgxIDMzNy40NzI2NTYgMjgyLjU1MDc4MSA0MDQuOTg4MjgxIEMgMjgyLjU1MDc4MSA0NzIuNTA3ODEyIDMzNy40ODQzNzUgNTI3LjQzNzUgNDA1IDUyNy40Mzc1IEMgNDcyLjUxOTUzMSA1MjcuNDM3NSA1MjcuNDQ5MjE5IDQ3Mi41MDc4MTIgNTI3LjQ0OTIxOSA0MDQuOTg4MjgxIEMgNTI3LjQ0OTIxOSAzMzcuNDcyNjU2IDQ3Mi41MTk1MzEgMjgyLjU1ODU5NCA0MDUgMjgyLjU1ODU5NCBaIE0gNDA1IDQ4NC4yMzA0NjkgQyAzNjEuMz'+
			'IwMzEyIDQ4NC4yMzA0NjkgMzI1Ljc4MTI1IDQ0OC42NzU3ODEgMzI1Ljc4MTI1IDQwNC45ODgyODEgQyAzMjUuNzgxMjUgMzYxLjMwMDc4MSAzNjEuMzIwMzEyIDMyNS43Njk1MzEgNDA1IDMyNS43Njk1MzEgQyA0NDguNjgzNTk0IDMyNS43Njk1MzEgNDg0LjIyMjY1NiAzNjEuMzAwNzgxIDQ4NC4yMjI2NTYgNDA0Ljk4ODI4MSBDIDQ4NC4yMjI2NTYgNDQ4LjY3NTc4MSA0NDguNjgzNTk0IDQ4NC4yMzA0NjkgNDA1IDQ4NC4yMzA0NjkgWiBNIDQwNSA0ODQuMjMwNDY5ICIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNTMy'+
			'LjA1MDc4MSAyNTMuMTgzNTk0IEMgNTE4LjM4MjgxMiAyNTMuMTgzNTk0IDUwNy4zMDQ2ODggMjY0LjI3MzQzOCA1MDcuMzA0Njg4IDI3Ny45Mzc1IEMgNTA3LjMwNDY4OCAyOTEuNjE3MTg4IDUxOC4zODI4MTIgMzAyLjY4NzUgNTMyLjA1MDc4MSAzMDIuNjg3NSBDIDU0NS43MTQ4NDQgMzAyLjY4NzUgNTU2Ljc5Njg3NSAyOTEuNjE3MTg4IDU1Ni43OTY4NzUgMjc3LjkzNzUgQyA1NTYuNzk2ODc1IDI2NC4yNzM0MzggNTQ1LjcxNDg0NCAyNTMuMTgzNTk0IDUzMi4wNTA3ODEgMjUzLjE4MzU5NCBaIE0gNTMyLjA1MDc4MSAyNTMuMTgzNTk0ICIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PS'+
			'IxIi8+CiA8ZyBjbGlwLXBhdGg9InVybCgjM2I2YTVkY2QyMykiPgogIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSA1MjUuNzk2ODc1IDE3NC4zODY3MTkgTCAyODQuMjAzMTI1IDE3NC4zODY3MTkgQyAyMjMuNjQ0NTMxIDE3NC4zODY3MTkgMTc0LjM3NSAyMjMuNjM2NzE5IDE3NC4zNzUgMjg0LjE5MTQwNiBMIDE3NC4zNzUgNTI1Ljc4OTA2MiBDIDE3NC4zNzUgNTg2LjMzOTg0NCAyMjMuNjQ0NTMxIDYzNS42MTMyODEgMjg0LjIwMzEyNSA2MzUuNjEzMjgxIEwgNTI1Ljc5Njg3NSA2MzUuNjEzMjgxIEMgNTg2LjM1MTU2MiA2MzUuNjEzMjgxIDYzNS42MjUgNTg2LjMzOTg0NCA2MzUu'+
			'NjI1IDUyNS43ODkwNjIgTCA2MzUuNjI1IDI4NC4xOTE0MDYgQyA2MzUuNjI1IDIyMy42MzY3MTkgNTg2LjM1MTU2MiAxNzQuMzg2NzE5IDUyNS43OTY4NzUgMTc0LjM4NjcxOSBaIE0gNTkyLjM5ODQzOCA1MjUuNzg5MDYyIEMgNTkyLjM5ODQzOCA1NjIuNTExNzE5IDU2Mi41MTk1MzEgNTkyLjQwMjM0NCA1MjUuNzk2ODc1IDU5Mi40MDIzNDQgTCAyODQuMjAzMTI1IDU5Mi40MDIzNDQgQyAyNDcuNDgwNDY5IDU5Mi40MDIzNDQgMjE3LjYwMTU2MiA1NjIuNTExNzE5IDIxNy42MDE1NjIgNTI1Ljc4OTA2MiBMIDIxNy42MDE1NjIgMjg0LjE5MTQwNiBDIDIxNy42MDE1NjIgMjQ3LjQ2ODc1IDI0Ny'+
			'40ODA0NjkgMjE3LjU5Mzc1IDI4NC4yMDMxMjUgMjE3LjU5Mzc1IEwgNTI1Ljc5Njg3NSAyMTcuNTkzNzUgQyA1NjIuNTE5NTMxIDIxNy41OTM3NSA1OTIuMzk4NDM4IDI0Ny40Njg3NSA1OTIuMzk4NDM4IDI4NC4xOTE0MDYgWiBNIDU5Mi4zOTg0MzggNTI1Ljc4OTA2MiAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogPC9nPgo8L3N2Zz4K';
		me._button_twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjQxMmQ2MDk1OTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC40Mjk2ODggMC40Mjk2ODggTCA3NzcuNTcwMzEyIDAuNDI5Njg4IEwgNzc3LjU3MDMxMiA3Nz'+
			'cuNTcwMzEyIEwgMC40Mjk2ODggNzc3LjU3MDMxMiBaIE0gMC40Mjk2ODggMC40Mjk2ODggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImI4NTgxNjdiYTUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzg5IDAuNDI5Njg4IEMgMTc0LjM5ODQzOCAwLjQyOTY4OCAwLjQyOTY4OCAxNzQuMzk4NDM4IDAuNDI5Njg4IDM4OSBDIDAuNDI5Njg4IDYwMy42MDE1NjIgMTc0LjM5ODQzOCA3NzcuNTcwMzEyIDM4OSA3NzcuNTcwMzEyIEMgNjAzLjYwMTU2MiA3NzcuNTcwMzEyIDc3Ny41NzAzMTIgNjAzLjYwMTU2MiA3NzcuNTcwMzEyIDM4OSBDIDc3Ny41NzAzMTIgMTc0'+
			'LjM5ODQzOCA2MDMuNjAxNTYyIDAuNDI5Njg4IDM4OSAwLjQyOTY4OCBaIE0gMzg5IDAuNDI5Njg4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0MjBmY2VlMDk4Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNDI5Njg4IDAuNDI5Njg4IEwgNzc3LjU3MDMxMiAwLjQyOTY4OCBMIDc3Ny41NzAzMTIgNzc3LjU3MDMxMiBMIDAuNDI5Njg4IDc3Ny41NzAzMTIgWiBNIDAuNDI5Njg4IDAuNDI5Njg4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJkZThjMjYxY2MzIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM4OSAwLjQyOT'+
			'Y4OCBDIDE3NC4zOTg0MzggMC40Mjk2ODggMC40Mjk2ODggMTc0LjM5ODQzOCAwLjQyOTY4OCAzODkgQyAwLjQyOTY4OCA2MDMuNjAxNTYyIDE3NC4zOTg0MzggNzc3LjU3MDMxMiAzODkgNzc3LjU3MDMxMiBDIDYwMy42MDE1NjIgNzc3LjU3MDMxMiA3NzcuNTcwMzEyIDYwMy42MDE1NjIgNzc3LjU3MDMxMiAzODkgQyA3NzcuNTcwMzEyIDE3NC4zOTg0MzggNjAzLjYwMTU2MiAwLjQyOTY4OCAzODkgMC40Mjk2ODggWiBNIDM4OSAwLjQyOTY4OCAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iOTNkYWY3NzU2YSI+CiAgIDxyZWN0IHdpZHRoPSI3NzgiIGhlaWdodD0iNzc4IiB4PSIw'+
			'IiB5PSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjEzZTY3NjQyOWMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMTM5LjA4OTg0NCAxMzkuMDg5ODQ0IEwgNjM4LjkxMDE1NiAxMzkuMDg5ODQ0IEwgNjM4LjkxMDE1NiA2MzguOTEwMTU2IEwgMTM5LjA4OTg0NCA2MzguOTEwMTU2IFogTSAxMzkuMDg5ODQ0IDEzOS4wODk4NDQgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImU0YzA3NzIwMWIiPgogICA8cmVjdCB3aWR0aD0iNzc4IiBoZWlnaHQ9Ijc3OCIgeD0iMCIgeT0iMCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyB0cmFuc2Zvcm'+
			'09Im1hdHJpeCgxLCAwLCAwLCAxLCAxNiwgMTYpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZTRjMDc3MjAxYikiPgogICA8ZyBjbGlwLXBhdGg9InVybCgjNDEyZDYwOTU5NCkiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2I4NTgxNjdiYTUpIj4KICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwLjAwMDAwMDAwMDAwMDAzOTA4KSI+CiAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCM5M2RhZjc3NTZhKSI+CiAgICAgICA8ZyBjbGlwLXBhdGg9InVybCgjNDIwZmNlZTA5OCkiPgogICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNkZThjMjYxY2MzKSI+CiAgICAgICAgIDxwYXRo'+
			'IGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjQyOTY4OCAwLjQyOTY4OCBMIDc3Ny41NzAzMTIgMC40Mjk2ODggTCA3NzcuNTcwMzEyIDc3Ny41NzAzMTIgTCAwLjQyOTY4OCA3NzcuNTcwMzEyIFogTSAwLjQyOTY4OCAwLjQyOTY4OCAiIGZpbGw9IiMyNzI3MjciIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICAgICAgICA8L2c+CiAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICA8L2c+CiAgICA8L2c+CiAgIDwvZz4KICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDM4OSAyNTYuMzIwMzEyIEMgMzE1LjgzOTg0NCAyNTYuMzIwMzEyIDI1Ni4zMTI1IDMxNS44MjQyMTkgMjU2Lj'+
			'MxMjUgMzg4Ljk4ODI4MSBDIDI1Ni4zMTI1IDQ2Mi4xNTIzNDQgMzE1LjgzOTg0NCA1MjEuNjc1NzgxIDM4OSA1MjEuNjc1NzgxIEMgNDYyLjE2NDA2MiA1MjEuNjc1NzgxIDUyMS42OTE0MDYgNDYyLjE1MjM0NCA1MjEuNjkxNDA2IDM4OC45ODgyODEgQyA1MjEuNjkxNDA2IDMxNS44MjQyMTkgNDYyLjE2NDA2MiAyNTYuMzIwMzEyIDM4OSAyNTYuMzIwMzEyIFogTSAzODkgNDc0Ljg1NTQ2OSBDIDM0MS42NjQwNjIgNDc0Ljg1NTQ2OSAzMDMuMTU2MjUgNDM2LjMyODEyNSAzMDMuMTU2MjUgMzg4Ljk4ODI4MSBDIDMwMy4xNTYyNSAzNDEuNjQ4NDM4IDM0MS42NjQwNjIgMzAzLjE0MDYyNSAzODkg'+
			'MzAzLjE0MDYyNSBDIDQzNi4zMzU5MzggMzAzLjE0MDYyNSA0NzQuODQ3NjU2IDM0MS42NDg0MzggNDc0Ljg0NzY1NiAzODguOTg4MjgxIEMgNDc0Ljg0NzY1NiA0MzYuMzI4MTI1IDQzNi4zMzU5MzggNDc0Ljg1NTQ2OSAzODkgNDc0Ljg1NTQ2OSBaIE0gMzg5IDQ3NC44NTU0NjkgIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDUyNi42NzU3ODEgMjI0LjQ5MjE4OCBDIDUxMS44NjcxODggMjI0LjQ5MjE4OCA0OTkuODU5Mzc1IDIzNi41MDc4MTIgNDk5Ljg1OTM3NSAyNTEuMzEyNSBDIDQ5OS44NTkzNzUgMjY2LjEzMj'+
			'gxMiA1MTEuODY3MTg4IDI3OC4xMzI4MTIgNTI2LjY3NTc4MSAyNzguMTMyODEyIEMgNTQxLjQ4NDM3NSAyNzguMTMyODEyIDU1My40ODgyODEgMjY2LjEzMjgxMiA1NTMuNDg4MjgxIDI1MS4zMTI1IEMgNTUzLjQ4ODI4MSAyMzYuNTA3ODEyIDU0MS40ODQzNzUgMjI0LjQ5MjE4OCA1MjYuNjc1NzgxIDIyNC40OTIxODggWiBNIDUyNi42NzU3ODEgMjI0LjQ5MjE4OCAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8ZyBjbGlwLXBhdGg9InVybCgjMTNlNjc2NDI5YykiPgogICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDUxOS44OTQ1MzEgMTM5LjEwMTU2MiBM'+
			'IDI1OC4xMDE1NjIgMTM5LjEwMTU2MiBDIDE5Mi40ODA0NjkgMTM5LjEwMTU2MiAxMzkuMDg5ODQ0IDE5Mi40NzI2NTYgMTM5LjA4OTg0NCAyNTguMDg5ODQ0IEwgMTM5LjA4OTg0NCA1MTkuODg2NzE5IEMgMTM5LjA4OTg0NCA1ODUuNTAzOTA2IDE5Mi40ODA0NjkgNjM4Ljg5NDUzMSAyNTguMTAxNTYyIDYzOC44OTQ1MzEgTCA1MTkuODk0NTMxIDYzOC44OTQ1MzEgQyA1ODUuNTE5NTMxIDYzOC44OTQ1MzEgNjM4LjkxMDE1NiA1ODUuNTAzOTA2IDYzOC45MTAxNTYgNTE5Ljg4NjcxOSBMIDYzOC45MTAxNTYgMjU4LjA4OTg0NCBDIDYzOC45MTAxNTYgMTkyLjQ3MjY1NiA1ODUuNTE5NTMxIDEzOS'+
			'4xMDE1NjIgNTE5Ljg5NDUzMSAxMzkuMTAxNTYyIFogTSA1OTIuMDY2NDA2IDUxOS44ODY3MTkgQyA1OTIuMDY2NDA2IDU1OS42ODM1OTQgNTU5LjY5MTQwNiA1OTIuMDc0MjE5IDUxOS44OTQ1MzEgNTkyLjA3NDIxOSBMIDI1OC4xMDE1NjIgNTkyLjA3NDIxOSBDIDIxOC4zMDg1OTQgNTkyLjA3NDIxOSAxODUuOTI5Njg4IDU1OS42ODM1OTQgMTg1LjkyOTY4OCA1MTkuODg2NzE5IEwgMTg1LjkyOTY4OCAyNTguMDg5ODQ0IEMgMTg1LjkyOTY4OCAyMTguMjkyOTY5IDIxOC4zMDg1OTQgMTg1LjkyMTg3NSAyNTguMTAxNTYyIDE4NS45MjE4NzUgTCA1MTkuODk0NTMxIDE4NS45MjE4NzUgQyA1NTku'+
			'NjkxNDA2IDE4NS45MjE4NzUgNTkyLjA2NjQwNiAyMTguMjkyOTY5IDU5Mi4wNjY0MDYgMjU4LjA4OTg0NCBaIE0gNTkyLjA2NjQwNiA1MTkuODg2NzE5ICIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
			player.openUrl("https:\/\/www.instagram.com\/minastenisclube\/","_blank");
		}
		me._button_twitter.onmouseenter=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
			me.elementMouseOver['button_twitter']=true;
		}
		me._button_twitter.onmouseleave=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
			me.elementMouseOver['button_twitter']=false;
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8cGF0aCBmaW'+
			'xsPSIjMjcyNzI3IiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjIgIEMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTguMywzNzcuNmgtMTBjLTEuMiwwLTIuNSwxLjYtMi41LDMuOHY2LjRoMTIuNXYxMi41aC0xMi41djMwLjFoLTEyLjV2LTMwLjFoLTEwdi0xMi41aDEwICB2LTYuM2MwLTksNi43LTE2LjMsMTUtMTYuM2gxMFYzNzcuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY4LjMsMzc3LjZoMTB2LTEy'+
			'LjRoLTEwYy04LjMsMC0xNSw3LjMtMTUsMTYuM3Y2LjNoLTEwdjEyLjVoMTB2MzAuMWgxMi41di0zMC4xaDEyLjV2LTEyLjVoLTEyLjV2LTYuNCAgQy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiLz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8cGF0aCBmaW'+
			'xsPSIjMjcyNzI3IiBkPSJNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU2LjUsMzc1LjYgIGgtMTFjLTEuMywwLTIuOCwxLjgtMi44LDQuMXY3aDEzLjh2MTMuN2gtMTMuOHYzMy4yaC0xMy44di0zMy4yaC0xMXYtMTMuN2gxMXYtNi45YzAtOS45LDcuNC0xNy45LDE2LjUtMTcuOWgxMVYzNzUuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY3LjUsMzc1LjZoMTF2LTEzLjZoLTExYy05LjEsMC0x'+
			'Ni41LDgtMTYuNSwxNy45djYuOWgtMTF2MTMuN2gxMXYzMy4yaDEzLjh2LTMzLjJoMTMuOHYtMTMuN2gtMTMuOHYtNyAgQy0xNzAuMywzNzcuMy0xNjguOCwzNzUuNi0xNjcuNSwzNzUuNnoiLz4KPC9zdmc+Cg==';
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
			me.elementMouseOver['button_facebook']=true;
		}
		me._button_facebook.onmouseleave=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
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
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImZiOTJiOGI1OTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZWQzOGU4N2M0YiI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjQ2NjI3NWIxMjQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iMjk3M2E2MjVjOSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI2MDhiZjg4NjFiIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgaGVpZ2h0PSI3MjQiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0'+
			'aCBpZD0iNzdmYWVjYThhYyI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjkuNTU0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDEyOS41NTQ2ODggTCA2ODAuODA0Njg4IDY4MC44MDQ2ODggTCAxMjkuNTU0Njg4IDY4MC44MDQ2ODggWiBNIDEyOS41NTQ2ODggMTI5LjU1NDY4OCAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2ZiOTJiOGI1OTQpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZWQzOGU4N2M0YikiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKC'+
			'M2MDhiZjg4NjFiKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzQ2NjI3NWIxMjQpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzI5NzNhNjI1YzkpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbD0iIzEzMjk1OSIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1'+
			'cmwoIzc3ZmFlY2E4YWMpIj4KICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDQxLjUzOTA2MiAzMjIuOTI5Njg4IEwgMzQ1Ljk3NjU2MiAzMzguNjY3OTY5IEwgMzM4LjY2Nzk2OSAzNjAuMDI3MzQ0IEwgMzQ2LjUzOTA2MiAzNTkuNDY0ODQ0IEMgMzU2LjY1NjI1IDM1OC45MDYyNSAzNjIuODM5ODQ0IDM1OC45MDYyNSAzNjYuMjEwOTM4IDM2Mi4yNzczNDQgQyAzNjkuMDIzNDM4IDM2NS4wODk4NDQgMzY5LjU4NTkzOCAzNjcuMzM1OTM4IDM2OS41ODU5MzggMzY4LjQ2MDkzOCBDIDM2OS41ODU5MzggMzc0LjA4MjAzMSAzNjcuODk4NDM4IDM4My4wNzQyMTkgMzY0LjUyNzM0NCAzOT'+
			'QuODc4OTA2IEwgMzI2Ljg2MzI4MSA1MjQuMTcxODc1IEMgMzIzLjQ5MjE4OCA1MzQuODUxNTYyIDMyMS44MDQ2ODggNTQzLjg0Mzc1IDMyMS44MDQ2ODggNTUxLjE1MjM0NCBDIDMyMS44MDQ2ODggNTYyLjk1NzAzMSAzMjUuNzM4MjgxIDU3Mi41MTU2MjUgMzM0LjE3MTg3NSA1ODAuMzgyODEyIEMgMzQyLjAzOTA2MiA1ODcuNjkxNDA2IDM1Mi43MjI2NTYgNTkxLjYyNSAzNjUuNjQ4NDM4IDU5MS42MjUgQyAzOTguMjUzOTA2IDU5MS42MjUgNDI5LjE3MTg3NSA1NjYuODkwNjI1IDQ1Ny4yNzczNDQgNTE3Ljk4ODI4MSBMIDQ2MC4wODU5MzggNTEzLjQ4ODI4MSBMIDQ0MS41MzkwNjIgNTAyLjgw'+
			'ODU5NCBMIDQzOC43MjY1NjIgNTA2Ljc0NjA5NCBDIDQyNy40ODQzNzUgNTIzLjYwOTM3NSA0MTguNDkyMTg4IDUzNS40MTQwNjIgNDEwLjYyMTA5NCA1NDEuNTk3NjU2IEMgNDA4LjM3MTA5NCA1NDMuMjgxMjUgNDA2LjY4MzU5NCA1NDQuNDA2MjUgNDA1IDU0NC40MDYyNSBDIDQwNSA1NDQuNDA2MjUgNDA0LjQzNzUgNTQ0LjQwNjI1IDQwMy44NzUgNTQzLjI4MTI1IEMgNDAyLjc1IDU0Mi4xNjAxNTYgNDAyLjc1IDU0MS41OTc2NTYgNDAyLjc1IDU0MS41OTc2NTYgQyA0MDIuNzUgNTM5LjkxMDE1NiA0MDMuMzEyNSA1MzUuNDE0MDYyIDQwNy4yNDYwOTQgNTIxLjM1OTM3NSBMIDQ2NC41ODU5Mz'+
			'ggMzIyLjM2NzE4OCBMIDQ0MS41MzkwNjIgMzIyLjM2NzE4OCBaIE0gNDcwLjc2OTUzMSAyODYuOTUzMTI1IEMgNDc5Ljc2MTcxOSAyNzcuOTU3MDMxIDQ4NC4yNTc4MTIgMjY3LjI3NzM0NCA0ODQuMjU3ODEyIDI1NC45MTAxNTYgQyA0ODQuMjU3ODEyIDI0Mi41NDI5NjkgNDc5Ljc2MTcxOSAyMzEuODYzMjgxIDQ3MS4zMzIwMzEgMjIyLjg3MTA5NCBDIDQ2Mi44OTg0MzggMjEzLjg3NSA0NTEuNjU2MjUgMjA5LjM3ODkwNiA0MzkuMjg5MDYyIDIwOS4zNzg5MDYgQyA0MjYuOTIxODc1IDIwOS4zNzg5MDYgNDE2LjI0MjE4OCAyMTMuODc1IDQwNy4yNDYwOTQgMjIyLjg3MTA5NCBDIDM5OC44MTY0'+
			'MDYgMjMxLjg2MzI4MSAzOTQuMzIwMzEyIDI0Mi41NDI5NjkgMzk0LjMyMDMxMiAyNTQuOTEwMTU2IEMgMzk0LjMyMDMxMiAyNjcuMjc3MzQ0IDM5OC44MTY0MDYgMjc3Ljk1NzAzMSA0MDcuODA4NTk0IDI4Ni45NTMxMjUgQyA0MTYuODA0Njg4IDI5NS45NDUzMTIgNDI3LjQ4NDM3NSAzMDAuNDQxNDA2IDQzOS4yODkwNjIgMzAwLjQ0MTQwNiBDIDQ1MS42NTYyNSAyOTkuODgyODEyIDQ2Mi4zMzU5MzggMjk1LjM4MjgxMiA0NzAuNzY5NTMxIDI4Ni45NTMxMjUgTSA2MzkuNDA2MjUgNDA1IEMgNjM5LjQwNjI1IDUzNC4yODkwNjIgNTM0LjI4OTA2MiA2MzkuNDA2MjUgNDA1IDYzOS40MDYyNSBDID'+
			'I3NS43MTA5MzggNjM5LjQwNjI1IDE3MC41ODk4NDQgNTM0LjI4OTA2MiAxNzAuNTg5ODQ0IDQwNSBDIDE3MC41ODk4NDQgMjc1LjcxMDkzOCAyNzUuNzEwOTM4IDE3MC41ODk4NDQgNDA1IDE3MC41ODk4NDQgQyA1MzQuMjg5MDYyIDE3MC41ODk4NDQgNjM5LjQwNjI1IDI3NS43MTA5MzggNjM5LjQwNjI1IDQwNSBNIDY4MC40NDE0MDYgNDA1IEMgNjgwLjQ0MTQwNiAyNTMuMjIyNjU2IDU1Ni43NzM0MzggMTI5LjU1NDY4OCA0MDUgMTI5LjU1NDY4OCBDIDI1My4yMjI2NTYgMTI5LjU1NDY4OCAxMjkuNTU0Njg4IDI1My4yMjI2NTYgMTI5LjU1NDY4OCA0MDUgQyAxMjkuNTU0Njg4IDU1Ni43NzM0'+
			'MzggMjUzLjIyMjY1NiA2ODAuNDQxNDA2IDQwNSA2ODAuNDQxNDA2IEMgNTU2Ljc3MzQzOCA2ODAuNDQxNDA2IDY4MC40NDE0MDYgNTU2Ljc3MzQzOCA2ODAuNDQxNDA2IDQwNSAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogPC9nPgogPHBhdGggZD0iTSAtMC4wMDE5NTA1MiAyNC4wMDEzMzIgTCA2ODcuMTY1MzMxIDIzLjk5ODQxNiAiIHN0cm9rZS13aWR0aD0iNDgiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjYxMzMxLCAwLjQzMTY4NCwgLTAuNDMxNjg0LCAtMC42MTMzMSwgNjQwLjIxMTM0NywgMjgxLjQ2MzI4NykiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2'+
			'ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._stop_image_specification__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_image_specification__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNjNTgzZTQ1ZTAiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMjUuNjc5Njg4IDIzLjY0ODQzOCBMIDgwNC4zNTE1NjIgMjMuNjQ4NDM4IEwgODA0LjM1MTU2Mi'+
			'A4MDIuMzIwMzEyIEwgMjUuNjc5Njg4IDgwMi4zMjAzMTIgWiBNIDI1LjY3OTY4OCAyMy42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjdjNDIwYTQ5OTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDE1LjAxNTYyNSAyMy42NDg0MzggQyAxOTkuOTg4MjgxIDIzLjY0ODQzOCAyNS42Nzk2ODggMTk3Ljk1NzAzMSAyNS42Nzk2ODggNDEyLjk4NDM3NSBDIDI1LjY3OTY4OCA2MjguMDA3ODEyIDE5OS45ODgyODEgODAyLjMyMDMxMiA0MTUuMDE1NjI1IDgwMi4zMjAzMTIgQyA2MzAuMDM5MDYyIDgwMi4zMjAzMTIgODA0LjM1MTU2MiA2MjguMDA3ODEy'+
			'IDgwNC4zNTE1NjIgNDEyLjk4NDM3NSBDIDgwNC4zNTE1NjIgMTk3Ljk1NzAzMSA2MzAuMDM5MDYyIDIzLjY0ODQzOCA0MTUuMDE1NjI1IDIzLjY0ODQzOCBaIE0gNDE1LjAxNTYyNSAyMy42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjRjNTFhNmE3ZGMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42Nzk2ODggMC42NDg0MzggTCA3NzkuMzUxNTYyIDAuNjQ4NDM4IEwgNzc5LjM1MTU2MiA3NzkuMzIwMzEyIEwgMC42Nzk2ODggNzc5LjMyMDMxMiBaIE0gMC42Nzk2ODggMC42NDg0MzggIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9Im'+
			'Q1Nzg0MjNkMjkiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzkwLjAxNTYyNSAwLjY0ODQzOCBDIDE3NC45ODgyODEgMC42NDg0MzggMC42Nzk2ODggMTc0Ljk1NzAzMSAwLjY3OTY4OCAzODkuOTg0Mzc1IEMgMC42Nzk2ODggNjA1LjAwNzgxMiAxNzQuOTg4MjgxIDc3OS4zMjAzMTIgMzkwLjAxNTYyNSA3NzkuMzIwMzEyIEMgNjA1LjAzOTA2MiA3NzkuMzIwMzEyIDc3OS4zNTE1NjIgNjA1LjAwNzgxMiA3NzkuMzUxNTYyIDM4OS45ODQzNzUgQyA3NzkuMzUxNTYyIDE3NC45NTcwMzEgNjA1LjAzOTA2MiAwLjY0ODQzOCAzOTAuMDE1NjI1IDAuNjQ4NDM4IFogTSAzOTAuMDE1'+
			'NjI1IDAuNjQ4NDM4ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI5ZjExN2MzNGNjIj4KICAgPHJlY3Qgd2lkdGg9Ijc4MCIgaGVpZ2h0PSI3ODAiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iOWVkMjU2NGMzOSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAxMjEuOTE0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDEyMS45MTQwNjIgTCA2ODguMTY0MDYyIDY4OC4xNjQwNjIgTCAxMjEuOTE0MDYyIDY4OC4xNjQwNjIgWiBNIDEyMS45MTQwNjIgMTIxLjkxNDA2MiAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2'+
			'xpcC1wYXRoPSJ1cmwoI2NjNTgzZTQ1ZTApIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjN2M0MjBhNDk5NykiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAyNSwgMjMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCM5ZjExN2MzNGNjKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzRjNTFhNmE3ZGMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2Q1Nzg0MjNkMjkpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY3OTY4OCAwLjY0ODQzOCBMIDc3OS4zNTE1NjIgMC42NDg0MzggTCA3NzkuMzUxNTYyIDc3OS4zMjAzMTIgTCAwLjY3OTY4OCA3'+
			'NzkuMzIwMzEyIFogTSAwLjY3OTY4OCAwLjY0ODQzOCAiIGZpbGw9IiMxMzI5NTkiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsaXAtcGF0aD0idXJsKCM5ZWQyNTY0YzM5KSI+CiAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDQ0Mi41NTA3ODEgMzIwLjY1MjM0NCBMIDM0NC4zMzU5MzggMzM2LjgyODEyNSBMIDMzNi44MjgxMjUgMzU4Ljc4MTI1IEwgMzQ0LjkxNDA2MiAzNTguMjAzMTI1IEMgMzU1LjMxMjUgMzU3LjYyNSAzNjEuNjY3OTY5IDM1Ny42MjUgMzY1LjEzNjcxOSAzNj'+
			'EuMDg5ODQ0IEMgMzY4LjAyMzQzOCAzNjMuOTgwNDY5IDM2OC42MDE1NjIgMzY2LjI4OTA2MiAzNjguNjAxNTYyIDM2Ny40NDUzMTIgQyAzNjguNjAxNTYyIDM3My4yMjI2NTYgMzY2Ljg2NzE4OCAzODIuNDY4NzUgMzYzLjQwMjM0NCAzOTQuNTk3NjU2IEwgMzI0LjY5NTMxMiA1MjcuNDc2NTYyIEMgMzIxLjIzMDQ2OSA1MzguNDUzMTI1IDMxOS40OTYwOTQgNTQ3LjY5NTMxMiAzMTkuNDk2MDk0IDU1NS4yMDcwMzEgQyAzMTkuNDk2MDk0IDU2Ny4zMzk4NDQgMzIzLjUzOTA2MiA1NzcuMTYwMTU2IDMzMi4yMDcwMzEgNTg1LjI0NjA5NCBDIDM0MC4yOTI5NjkgNTkyLjc1NzgxMiAzNTEuMjY5NTMx'+
			'IDU5Ni44MDA3ODEgMzY0LjU1ODU5NCA1OTYuODAwNzgxIEMgMzk4LjA2NjQwNiA1OTYuODAwNzgxIDQyOS44Mzk4NDQgNTcxLjM4MjgxMiA0NTguNzI2NTYyIDUyMS4xMjEwOTQgTCA0NjEuNjEzMjgxIDUxNi41IEwgNDQyLjU1MDc4MSA1MDUuNTIzNDM4IEwgNDM5LjY2MDE1NiA1MDkuNTY2NDA2IEMgNDI4LjEwNTQ2OSA1MjYuODk4NDM4IDQxOC44NjMyODEgNTM5LjAzMTI1IDQxMC43NzczNDQgNTQ1LjM4NjcxOSBDIDQwOC40NjQ4NDQgNTQ3LjExNzE4OCA0MDYuNzMwNDY5IDU0OC4yNzM0MzggNDA1IDU0OC4yNzM0MzggQyA0MDUgNTQ4LjI3MzQzOCA0MDQuNDIxODc1IDU0OC4yNzM0MzggND'+
			'AzLjg0Mzc1IDU0Ny4xMTcxODggQyA0MDIuNjg3NSA1NDUuOTYwOTM4IDQwMi42ODc1IDU0NS4zODY3MTkgNDAyLjY4NzUgNTQ1LjM4NjcxOSBDIDQwMi42ODc1IDU0My42NTIzNDQgNDAzLjI2NTYyNSA1MzkuMDMxMjUgNDA3LjMwODU5NCA1MjQuNTg1OTM4IEwgNDY2LjIzODI4MSAzMjAuMDc0MjE5IEwgNDQyLjU1MDc4MSAzMjAuMDc0MjE5IFogTSA0NzIuNTkzNzUgMjgzLjY3NTc4MSBDIDQ4MS44MzU5MzggMjc0LjQzMzU5NCA0ODYuNDU3MDMxIDI2My40NTcwMzEgNDg2LjQ1NzAzMSAyNTAuNzQ2MDk0IEMgNDg2LjQ1NzAzMSAyMzguMDM1MTU2IDQ4MS44MzU5MzggMjI3LjA1ODU5NCA0NzMu'+
			'MTY3OTY5IDIxNy44MTY0MDYgQyA0NjQuNTAzOTA2IDIwOC41NzQyMTkgNDUyLjk0OTIxOSAyMDMuOTQ5MjE5IDQ0MC4yMzgyODEgMjAzLjk0OTIxOSBDIDQyNy41MzEyNSAyMDMuOTQ5MjE5IDQxNi41NTA3ODEgMjA4LjU3NDIxOSA0MDcuMzA4NTk0IDIxNy44MTY0MDYgQyAzOTguNjQ0NTMxIDIyNy4wNTg1OTQgMzk0LjAyMzQzOCAyMzguMDM1MTU2IDM5NC4wMjM0MzggMjUwLjc0NjA5NCBDIDM5NC4wMjM0MzggMjYzLjQ1NzAzMSAzOTguNjQ0NTMxIDI3NC40MzM1OTQgNDA3Ljg4NjcxOSAyODMuNjc1NzgxIEMgNDE3LjEyODkwNiAyOTIuOTIxODc1IDQyOC4xMDU0NjkgMjk3LjU0Mjk2OSA0ND'+
			'AuMjM4MjgxIDI5Ny41NDI5NjkgQyA0NTIuOTQ5MjE5IDI5Ni45NjQ4NDQgNDYzLjkyNTc4MSAyOTIuMzQzNzUgNDcyLjU5Mzc1IDI4My42NzU3ODEgTSA2NDUuOTEwMTU2IDQwNSBDIDY0NS45MTAxNTYgNTM3Ljg3NSA1MzcuODc1IDY0NS45MTAxNTYgNDA1IDY0NS45MTAxNTYgQyAyNzIuMTIxMDk0IDY0NS45MTAxNTYgMTY0LjA4OTg0NCA1MzcuODc1IDE2NC4wODk4NDQgNDA1IEMgMTY0LjA4OTg0NCAyNzIuMTIxMDk0IDI3Mi4xMjEwOTQgMTY0LjA4OTg0NCA0MDUgMTY0LjA4OTg0NCBDIDUzNy44NzUgMTY0LjA4OTg0NCA2NDUuOTEwMTU2IDI3Mi4xMjEwOTQgNjQ1LjkxMDE1NiA0MDUgTSA2'+
			'ODguMDgyMDMxIDQwNSBDIDY4OC4wODIwMzEgMjQ5LjAxMTcxOSA1NjAuOTg0Mzc1IDEyMS45MTQwNjIgNDA1IDEyMS45MTQwNjIgQyAyNDkuMDExNzE5IDEyMS45MTQwNjIgMTIxLjkxNDA2MiAyNDkuMDExNzE5IDEyMS45MTQwNjIgNDA1IEMgMTIxLjkxNDA2MiA1NjAuOTg0Mzc1IDI0OS4wMTE3MTkgNjg4LjA4MjAzMSA0MDUgNjg4LjA4MjAzMSBDIDU2MC45ODQzNzUgNjg4LjA4MjAzMSA2ODguMDgyMDMxIDU2MC45ODQzNzUgNjg4LjA4MjAzMSA0MDUgIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0gLTAuMDAyOTM1MDEgMjQuMDAwOTA3IEwgNz'+
			'E0LjU5NDA3OCAyNC4wMDA4ODMgIiBzdHJva2Utd2lkdGg9IjQ4IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC42Mjg4NzgsIDAuNDA4NjcxLCAtMC40MDg2NzEsIC0wLjYyODg3OCwgNjUwLjY0NjQ3NSwgMjkyLjIzOTM4KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
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
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['stop_image_specification']=true;
		}
		me._stop_image_specification.onmouseleave=function (e) {
			me._stop_image_specification__img.style.visibility='inherit';
			me._stop_image_specification__imgo.style.visibility='hidden';
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['stop_image_specification']=false;
		}
		me._stop_image_specification.ggUpdatePosition=function (useTransition) {
		}
		me._button_specifications.appendChild(me._stop_image_specification);
		el=me._start_image_specification=document.createElement('div');
		els=me._start_image_specification__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjA0OTVjY2ZkYWYiPgogICA8cGF0aCBkPSJNIDQzLjY1NjI1IDQzLjY1NjI1IEwgNzY2LjM0Mzc1IDQzLjY1NjI1IEwgNzY2LjM0Mzc1IDc2Ni4zNDM3NSBMIDQzLjY1NjI1IDc2Ni'+
			'4zNDM3NSBaIE0gNDMuNjU2MjUgNDMuNjU2MjUgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iNTRjM2U0MTBhZSI+CiAgIDxwYXRoIGQ9Ik0gNDA1IDQzLjY1NjI1IEMgMjA1LjQzMzU5NCA0My42NTYyNSA0My42NTYyNSAyMDUuNDMzNTk0IDQzLjY1NjI1IDQwNSBDIDQzLjY1NjI1IDYwNC41NjY0MDYgMjA1LjQzMzU5NCA3NjYuMzQzNzUgNDA1IDc2Ni4zNDM3NSBDIDYwNC41NjY0MDYgNzY2LjM0Mzc1IDc2Ni4zNDM3NSA2MDQuNTY2NDA2IDc2Ni4zNDM3NSA0MDUgQyA3NjYuMzQzNzUgMjA1LjQzMzU5NCA2MDQuNTY2NDA2IDQzLjY1NjI1IDQw'+
			'NSA0My42NTYyNSBaIE0gNDA1IDQzLjY1NjI1ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImQzZWNmYTY3YmIiPgogICA8cGF0aCBkPSJNIDAuNjU2MjUgMC42NTYyNSBMIDcyMy4zNDM3NSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDcyMy4zNDM3NSBMIDAuNjU2MjUgNzIzLjM0Mzc1IFogTSAwLjY1NjI1IDAuNjU2MjUgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iODYzMjY5ZDI1NSI+CiAgIDxwYXRoIGQ9Ik0gMzYyIDAuNjU2MjUgQyAxNjIuNDMzNTk0IDAuNjU2MjUgMC42NTYyNSAxNjIuNDMzNT'+
			'k0IDAuNjU2MjUgMzYyIEMgMC42NTYyNSA1NjEuNTY2NDA2IDE2Mi40MzM1OTQgNzIzLjM0Mzc1IDM2MiA3MjMuMzQzNzUgQyA1NjEuNTY2NDA2IDcyMy4zNDM3NSA3MjMuMzQzNzUgNTYxLjU2NjQwNiA3MjMuMzQzNzUgMzYyIEMgNzIzLjM0Mzc1IDE2Mi40MzM1OTQgNTYxLjU2NjQwNiAwLjY1NjI1IDM2MiAwLjY1NjI1IFogTSAzNjIgMC42NTYyNSAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJhN2Y5NjFkODI0Ij4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgaGVpZ2h0PSI3MjQiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0'+
			'aCBpZD0iYmVlNGQ4ZDNjYiI+CiAgIDxwYXRoIGQ9Ik0gMTI5LjU1NDY4OCAxMjkuNTU0Njg4IEwgNjgwLjgwNDY4OCAxMjkuNTU0Njg4IEwgNjgwLjgwNDY4OCA2ODAuODA0Njg4IEwgMTI5LjU1NDY4OCA2ODAuODA0Njg4IFogTSAxMjkuNTU0Njg4IDEyOS41NTQ2ODggIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoIzA0OTVjY2ZkYWYpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNTRjM2U0MTBhZSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKC'+
			'NhN2Y5NjFkODI0KSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2QzZWNmYTY3YmIpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzg2MzI2OWQyNTUpIj4KICAgICAgIDxwYXRoIGZpbGw9IiMyNzI3MjciIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xpcC1wYXRoPSJ1'+
			'cmwoI2JlZTRkOGQzY2IpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDQ0MS41MzkwNjIgMzIyLjkyOTY4OCBMIDM0NS45NzY1NjIgMzM4LjY2Nzk2OSBMIDMzOC42Njc5NjkgMzYwLjAyNzM0NCBMIDM0Ni41MzkwNjIgMzU5LjQ2NDg0NCBDIDM1Ni42NTYyNSAzNTguOTA2MjUgMzYyLjgzOTg0NCAzNTguOTA2MjUgMzY2LjIxMDkzOCAzNjIuMjc3MzQ0IEMgMzY5LjAyMzQzOCAzNjUuMDg5ODQ0IDM2OS41ODU5MzggMzY3LjMzNTkzOCAzNjkuNTg1OTM4IDM2OC40NjA5MzggQyAzNjkuNTg1OTM4IDM3NC4wODIwMzEgMzY3Ljg5ODQzOCAzODMuMDc0MjE5IDM2NC41MjczNDQgMzk0Ljg3OD'+
			'kwNiBMIDMyNi44NjMyODEgNTI0LjE3MTg3NSBDIDMyMy40OTIxODggNTM0Ljg1MTU2MiAzMjEuODA0Njg4IDU0My44NDM3NSAzMjEuODA0Njg4IDU1MS4xNTIzNDQgQyAzMjEuODA0Njg4IDU2Mi45NTcwMzEgMzI1LjczODI4MSA1NzIuNTE1NjI1IDMzNC4xNzE4NzUgNTgwLjM4MjgxMiBDIDM0Mi4wMzkwNjIgNTg3LjY5MTQwNiAzNTIuNzIyNjU2IDU5MS42MjUgMzY1LjY0ODQzOCA1OTEuNjI1IEMgMzk4LjI1MzkwNiA1OTEuNjI1IDQyOS4xNzE4NzUgNTY2Ljg5MDYyNSA0NTcuMjc3MzQ0IDUxNy45ODgyODEgTCA0NjAuMDg1OTM4IDUxMy40ODgyODEgTCA0NDEuNTM5MDYyIDUwMi44MDg1OTQg'+
			'TCA0MzguNzI2NTYyIDUwNi43NDYwOTQgQyA0MjcuNDg0Mzc1IDUyMy42MDkzNzUgNDE4LjQ5MjE4OCA1MzUuNDE0MDYyIDQxMC42MjEwOTQgNTQxLjU5NzY1NiBDIDQwOC4zNzEwOTQgNTQzLjI4MTI1IDQwNi42ODM1OTQgNTQ0LjQwNjI1IDQwNSA1NDQuNDA2MjUgQyA0MDUgNTQ0LjQwNjI1IDQwNC40Mzc1IDU0NC40MDYyNSA0MDMuODc1IDU0My4yODEyNSBDIDQwMi43NSA1NDIuMTYwMTU2IDQwMi43NSA1NDEuNTk3NjU2IDQwMi43NSA1NDEuNTk3NjU2IEMgNDAyLjc1IDUzOS45MTAxNTYgNDAzLjMxMjUgNTM1LjQxNDA2MiA0MDcuMjQ2MDk0IDUyMS4zNTkzNzUgTCA0NjQuNTg1OTM4IDMyMi'+
			'4zNjcxODggTCA0NDEuNTM5MDYyIDMyMi4zNjcxODggWiBNIDQ3MC43Njk1MzEgMjg2Ljk1MzEyNSBDIDQ3OS43NjE3MTkgMjc3Ljk1NzAzMSA0ODQuMjU3ODEyIDI2Ny4yNzczNDQgNDg0LjI1NzgxMiAyNTQuOTEwMTU2IEMgNDg0LjI1NzgxMiAyNDIuNTQyOTY5IDQ3OS43NjE3MTkgMjMxLjg2MzI4MSA0NzEuMzMyMDMxIDIyMi44NzEwOTQgQyA0NjIuODk4NDM4IDIxMy44NzUgNDUxLjY1NjI1IDIwOS4zNzg5MDYgNDM5LjI4OTA2MiAyMDkuMzc4OTA2IEMgNDI2LjkyMTg3NSAyMDkuMzc4OTA2IDQxNi4yNDIxODggMjEzLjg3NSA0MDcuMjQ2MDk0IDIyMi44NzEwOTQgQyAzOTguODE2NDA2IDIz'+
			'MS44NjMyODEgMzk0LjMyMDMxMiAyNDIuNTQyOTY5IDM5NC4zMjAzMTIgMjU0LjkxMDE1NiBDIDM5NC4zMjAzMTIgMjY3LjI3NzM0NCAzOTguODE2NDA2IDI3Ny45NTcwMzEgNDA3LjgwODU5NCAyODYuOTUzMTI1IEMgNDE2LjgwNDY4OCAyOTUuOTQ1MzEyIDQyNy40ODQzNzUgMzAwLjQ0MTQwNiA0MzkuMjg5MDYyIDMwMC40NDE0MDYgQyA0NTEuNjU2MjUgMjk5Ljg4MjgxMiA0NjIuMzM1OTM4IDI5NS4zODI4MTIgNDcwLjc2OTUzMSAyODYuOTUzMTI1IE0gNjM5LjQwNjI1IDQwNSBDIDYzOS40MDYyNSA1MzQuMjg5MDYyIDUzNC4yODkwNjIgNjM5LjQwNjI1IDQwNSA2MzkuNDA2MjUgQyAyNzUuNz'+
			'EwOTM4IDYzOS40MDYyNSAxNzAuNTg5ODQ0IDUzNC4yODkwNjIgMTcwLjU4OTg0NCA0MDUgQyAxNzAuNTg5ODQ0IDI3NS43MTA5MzggMjc1LjcxMDkzOCAxNzAuNTg5ODQ0IDQwNSAxNzAuNTg5ODQ0IEMgNTM0LjI4OTA2MiAxNzAuNTg5ODQ0IDYzOS40MDYyNSAyNzUuNzEwOTM4IDYzOS40MDYyNSA0MDUgTSA2ODAuNDQxNDA2IDQwNSBDIDY4MC40NDE0MDYgMjUzLjIyMjY1NiA1NTYuNzczNDM4IDEyOS41NTQ2ODggNDA1IDEyOS41NTQ2ODggQyAyNTMuMjIyNjU2IDEyOS41NTQ2ODggMTI5LjU1NDY4OCAyNTMuMjIyNjU2IDEyOS41NTQ2ODggNDA1IEMgMTI5LjU1NDY4OCA1NTYuNzczNDM4IDI1'+
			'My4yMjI2NTYgNjgwLjQ0MTQwNiA0MDUgNjgwLjQ0MTQwNiBDIDU1Ni43NzM0MzggNjgwLjQ0MTQwNiA2ODAuNDQxNDA2IDU1Ni43NzM0MzggNjgwLjQ0MTQwNiA0MDUgIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGwtb3BhY2l0eT0iMSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_image_specification__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_image_specification__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgdmlld0JveD0iMCAwIDgxMCA4MDkuOTk5OTkzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImRjMWEzOTFhMTUiPgogICA8cGF0aCBkPSJNIDE1LjY2NDA2MiAxNS42NjQwNjIgTCA3OTQuMzM1OTM4IDE1LjY2NDA2MiBMIDc5NC4zMzU5MzggNzk0LjMzNTkzOCBMIDE1LjY2ND'+
			'A2MiA3OTQuMzM1OTM4IFogTSAxNS42NjQwNjIgMTUuNjY0MDYyICIgY2xpcC1ydWxlPSJub256ZXJvIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjUzMzU4YzMxYzMiPgogICA8cGF0aCBkPSJNIDQwNSAxNS42NjQwNjIgQyAxODkuOTc2NTYyIDE1LjY2NDA2MiAxNS42NjQwNjIgMTg5Ljk3NjU2MiAxNS42NjQwNjIgNDA1IEMgMTUuNjY0MDYyIDYyMC4wMjM0MzggMTg5Ljk3NjU2MiA3OTQuMzM1OTM4IDQwNSA3OTQuMzM1OTM4IEMgNjIwLjAyMzQzOCA3OTQuMzM1OTM4IDc5NC4zMzU5MzggNjIwLjAyMzQzOCA3OTQuMzM1OTM4IDQwNSBDIDc5NC4zMzU5MzggMTg5Ljk3NjU2MiA2'+
			'MjAuMDIzNDM4IDE1LjY2NDA2MiA0MDUgMTUuNjY0MDYyIFogTSA0MDUgMTUuNjY0MDYyICIgY2xpcC1ydWxlPSJub256ZXJvIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9IjI3MzhiODY3OTMiPgogICA8cGF0aCBkPSJNIDAuNjY0MDYyIDAuNjY0MDYyIEwgNzc5LjMzNTkzOCAwLjY2NDA2MiBMIDc3OS4zMzU5MzggNzc5LjMzNTkzOCBMIDAuNjY0MDYyIDc3OS4zMzU5MzggWiBNIDAuNjY0MDYyIDAuNjY0MDYyICIgY2xpcC1ydWxlPSJub256ZXJvIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImVhNzcyMWU2MmYiPgogICA8cGF0aCBkPSJNIDM5MCAwLjY2NDA2MiBDID'+
			'E3NC45NzY1NjIgMC42NjQwNjIgMC42NjQwNjIgMTc0Ljk3NjU2MiAwLjY2NDA2MiAzOTAgQyAwLjY2NDA2MiA2MDUuMDIzNDM4IDE3NC45NzY1NjIgNzc5LjMzNTkzOCAzOTAgNzc5LjMzNTkzOCBDIDYwNS4wMjM0MzggNzc5LjMzNTkzOCA3NzkuMzM1OTM4IDYwNS4wMjM0MzggNzc5LjMzNTkzOCAzOTAgQyA3NzkuMzM1OTM4IDE3NC45NzY1NjIgNjA1LjAyMzQzOCAwLjY2NDA2MiAzOTAgMC42NjQwNjIgWiBNIDM5MCAwLjY2NDA2MiAiIGNsaXAtcnVsZT0ibm9uemVybyIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJmODJmNGQwNjNhIj4KICAgPHJlY3Qgd2lkdGg9Ijc4MCIgaGVp'+
			'Z2h0PSI3ODAiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZDQ1ODc0MDMyMSI+CiAgIDxwYXRoIGQ9Ik0gMTIxLjkxNDA2MiAxMjEuOTE0MDYyIEwgNjg4LjE2NDA2MiAxMjEuOTE0MDYyIEwgNjg4LjE2NDA2MiA2ODguMTY0MDYyIEwgMTIxLjkxNDA2MiA2ODguMTY0MDYyIFogTSAxMjEuOTE0MDYyIDEyMS45MTQwNjIgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgY2xpcC1wYXRoPSJ1cmwoI2RjMWEzOTFhMTUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNTMzNThjMzFjMykiPgogICA8ZyB0cmFuc2Zvcm09Im1hdH'+
			'JpeCgxLCAwLCAwLCAxLCAxNSwgMTUpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmODJmNGQwNjNhKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzI3MzhiODY3OTMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2VhNzcyMWU2MmYpIj4KICAgICAgIDxwYXRoIGZpbGw9IiMyNzI3MjciIGQ9Ik0gMC42NjQwNjIgMC42NjQwNjIgTCA3NzkuMzM1OTM4IDAuNjY0MDYyIEwgNzc5LjMzNTkzOCA3NzkuMzM1OTM4IEwgMC42NjQwNjIgNzc5LjMzNTkzOCBaIE0gMC42NjQwNjIgMC42NjQwNjIgIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICAgICAgPC9n'+
			'PgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsaXAtcGF0aD0idXJsKCNkNDU4NzQwMzIxKSI+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA0NDIuNTUwNzgxIDMyMC42NTIzNDQgTCAzNDQuMzM1OTM4IDMzNi44MjgxMjUgTCAzMzYuODI4MTI1IDM1OC43ODEyNSBMIDM0NC45MTQwNjIgMzU4LjIwMzEyNSBDIDM1NS4zMTI1IDM1Ny42MjUgMzYxLjY2Nzk2OSAzNTcuNjI1IDM2NS4xMzY3MTkgMzYxLjA4OTg0NCBDIDM2OC4wMjM0MzggMzYzLjk4MDQ2OSAzNjguNjAxNTYyIDM2Ni4yODkwNjIgMzY4LjYwMTU2MiAzNjcuNDQ1MzEyIEMgMzY4LjYwMTU2Mi'+
			'AzNzMuMjIyNjU2IDM2Ni44NjcxODggMzgyLjQ2ODc1IDM2My40MDIzNDQgMzk0LjU5NzY1NiBMIDMyNC42OTUzMTIgNTI3LjQ3NjU2MiBDIDMyMS4yMzA0NjkgNTM4LjQ1MzEyNSAzMTkuNDk2MDk0IDU0Ny42OTUzMTIgMzE5LjQ5NjA5NCA1NTUuMjA3MDMxIEMgMzE5LjQ5NjA5NCA1NjcuMzM5ODQ0IDMyMy41MzkwNjIgNTc3LjE2MDE1NiAzMzIuMjA3MDMxIDU4NS4yNDYwOTQgQyAzNDAuMjkyOTY5IDU5Mi43NTc4MTIgMzUxLjI2OTUzMSA1OTYuODAwNzgxIDM2NC41NTg1OTQgNTk2LjgwMDc4MSBDIDM5OC4wNjY0MDYgNTk2LjgwMDc4MSA0MjkuODM5ODQ0IDU3MS4zODI4MTIgNDU4LjcyNjU2'+
			'MiA1MjEuMTIxMDk0IEwgNDYxLjYxMzI4MSA1MTYuNSBMIDQ0Mi41NTA3ODEgNTA1LjUyMzQzOCBMIDQzOS42NjAxNTYgNTA5LjU2NjQwNiBDIDQyOC4xMDU0NjkgNTI2Ljg5ODQzOCA0MTguODYzMjgxIDUzOS4wMzEyNSA0MTAuNzc3MzQ0IDU0NS4zODY3MTkgQyA0MDguNDY0ODQ0IDU0Ny4xMTcxODggNDA2LjczMDQ2OSA1NDguMjczNDM4IDQwNSA1NDguMjczNDM4IEMgNDA1IDU0OC4yNzM0MzggNDA0LjQyMTg3NSA1NDguMjczNDM4IDQwMy44NDM3NSA1NDcuMTE3MTg4IEMgNDAyLjY4NzUgNTQ1Ljk2MDkzOCA0MDIuNjg3NSA1NDUuMzg2NzE5IDQwMi42ODc1IDU0NS4zODY3MTkgQyA0MDIuNj'+
			'g3NSA1NDMuNjUyMzQ0IDQwMy4yNjU2MjUgNTM5LjAzMTI1IDQwNy4zMDg1OTQgNTI0LjU4NTkzOCBMIDQ2Ni4yMzgyODEgMzIwLjA3NDIxOSBMIDQ0Mi41NTA3ODEgMzIwLjA3NDIxOSBaIE0gNDcyLjU5Mzc1IDI4My42NzU3ODEgQyA0ODEuODM1OTM4IDI3NC40MzM1OTQgNDg2LjQ1NzAzMSAyNjMuNDU3MDMxIDQ4Ni40NTcwMzEgMjUwLjc0NjA5NCBDIDQ4Ni40NTcwMzEgMjM4LjAzNTE1NiA0ODEuODM1OTM4IDIyNy4wNTg1OTQgNDczLjE2Nzk2OSAyMTcuODE2NDA2IEMgNDY0LjUwMzkwNiAyMDguNTc0MjE5IDQ1Mi45NDkyMTkgMjAzLjk0OTIxOSA0NDAuMjM4MjgxIDIwMy45NDkyMTkgQyA0'+
			'MjcuNTMxMjUgMjAzLjk0OTIxOSA0MTYuNTUwNzgxIDIwOC41NzQyMTkgNDA3LjMwODU5NCAyMTcuODE2NDA2IEMgMzk4LjY0NDUzMSAyMjcuMDU4NTk0IDM5NC4wMjM0MzggMjM4LjAzNTE1NiAzOTQuMDIzNDM4IDI1MC43NDYwOTQgQyAzOTQuMDIzNDM4IDI2My40NTcwMzEgMzk4LjY0NDUzMSAyNzQuNDMzNTk0IDQwNy44ODY3MTkgMjgzLjY3NTc4MSBDIDQxNy4xMjg5MDYgMjkyLjkyMTg3NSA0MjguMTA1NDY5IDI5Ny41NDI5NjkgNDQwLjIzODI4MSAyOTcuNTQyOTY5IEMgNDUyLjk0OTIxOSAyOTYuOTY0ODQ0IDQ2My45MjU3ODEgMjkyLjM0Mzc1IDQ3Mi41OTM3NSAyODMuNjc1NzgxIE0gNj'+
			'Q1LjkxMDE1NiA0MDUgQyA2NDUuOTEwMTU2IDUzNy44NzUgNTM3Ljg3NSA2NDUuOTEwMTU2IDQwNSA2NDUuOTEwMTU2IEMgMjcyLjEyMTA5NCA2NDUuOTEwMTU2IDE2NC4wODk4NDQgNTM3Ljg3NSAxNjQuMDg5ODQ0IDQwNSBDIDE2NC4wODk4NDQgMjcyLjEyMTA5NCAyNzIuMTIxMDk0IDE2NC4wODk4NDQgNDA1IDE2NC4wODk4NDQgQyA1MzcuODc1IDE2NC4wODk4NDQgNjQ1LjkxMDE1NiAyNzIuMTIxMDk0IDY0NS45MTAxNTYgNDA1IE0gNjg4LjA4MjAzMSA0MDUgQyA2ODguMDgyMDMxIDI0OS4wMTE3MTkgNTYwLjk4NDM3NSAxMjEuOTE0MDYyIDQwNSAxMjEuOTE0MDYyIEMgMjQ5LjAxMTcxOSAx'+
			'MjEuOTE0MDYyIDEyMS45MTQwNjIgMjQ5LjAxMTcxOSAxMjEuOTE0MDYyIDQwNSBDIDEyMS45MTQwNjIgNTYwLjk4NDM3NSAyNDkuMDExNzE5IDY4OC4wODIwMzEgNDA1IDY4OC4wODIwMzEgQyA1NjAuOTg0Mzc1IDY4OC4wODIwMzEgNjg4LjA4MjAzMSA1NjAuOTg0Mzc1IDY4OC4wODIwMzEgNDA1ICIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
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
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['start_image_specification']=true;
		}
		me._start_image_specification.onmouseleave=function (e) {
			me._start_image_specification__img.style.visibility='inherit';
			me._start_image_specification__imgo.style.visibility='hidden';
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
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
			me.elementMouseOver['tooltip_btn_specifications']=true;
		}
		me._tooltip_btn_specifications.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me.elementMouseOver['tooltip_btn_specifications']=false;
		}
		me._tooltip_btn_specifications.ggUpdatePosition=function (useTransition) {
		}
		me._button_specifications.appendChild(me._tooltip_btn_specifications);
		el=me._background_specifications=document.createElement('div');
		el.ggId="Background Specifications";
		el.ggDy=-92;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(163,163,163,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='height : 44.186%;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44.186% + 0px) / 2) - 92px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
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
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['background_specifications']=true;
		}
		me._background_specifications.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
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
		hs+='height : 92.1429%;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 95.6667%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
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
			var hs = player._("\ud83d\udccd R. da Bahia, n.\xba 2.244, Lourdes\n\n\ud83d\udc65Capacidade: 600 pessoas\n\n\ud83d\udcd0\xc1rea: 972m\xb2\n\n\u2195\ufe0f   P\xe9 direito 6,0m (sal\xe3o)\n\n\u26a1Energia (som e luz): 150 amp\xe8res por fase", params);
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
		me._text_2.onmouseenter=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['text_2']=true;
		}
		me._text_2.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['text_2']=false;
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
		me._thumbnail_cloner.onmouseenter=function (e) {
			player.setVariableValue('esconder_cursor', true);
			me.elementMouseOver['thumbnail_cloner']=true;
		}
		me._thumbnail_cloner.onmouseleave=function (e) {
			player.setVariableValue('esconder_cursor', false);
			me.elementMouseOver['thumbnail_cloner']=false;
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
		hs+='left : 236px;';
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
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['thumbnail']=true;
		}
		me._thumbnail.onmouseleave=function (e) {
			me._tooltip_btn_thumbnail.style.transition='none';
			me._tooltip_btn_thumbnail.style.visibility='hidden';
			me._tooltip_btn_thumbnail.ggVisible=false;
			player.setVariableValue('esconder_cursor', false);
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
			me.elementMouseOver['thumbnail']=false;
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button=document.createElement('div');
		els=me._thumbnail_hide_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGw9IiMxMzI5NTkiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVTMzQsMTIxLjEsNjUsMTIxLjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUzk2LDguOSw2NSw4Ljl6IE01NS40LDU3LjggICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuMyAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIuMnogTTMyLjgs'+
			'MTAwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4yICAgbDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6ICAgIE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDYxLjlsMTIuNy0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41ICAgYy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOGMwLTEuMywxLj'+
			'EtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjRDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4y'+
			'eiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40ICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44Yz'+
			'AtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnogTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNCAgIGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40ICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0y'+
			'LjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiAgIEMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjIgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCAgIEMxMDIuMiw1Ny44LDEwMi4yLD'+
			'cyLjIsMTAyLjIsNzIuMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGw9IiMxMzI5NTkiIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRTOTkuNCwyLjYsNjUsMi42eiBNNTQuMyw1Ny4xICAgYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICBjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcy'+
			'Ljl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNCAgIGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6ICAgIE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44ICAgYy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNT'+
			'cuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjdDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTU0LjMsNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTEuNkw1NC4zLDY4LjdWNTcuMXogTTIzLjcsNzIuOVY1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0gyNi40QzI0LjksNzUuNywyMy43LDc0'+
			'LjQsMjMuNyw3Mi45eiBNMjkuMywxMDQuNGMtMC40LDAtMC45LTAuMi0xLjItMC41ICAgbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zICAgQzMwLjEsMTA0LjIsMjkuNywxMDQuNCwyOS4zLDEwNC40eiBNNzUuNyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g2MS41bDE0LjEtMTQuMUw3NS43LDcyLjlMNzUuNyw3Mi45eiBNMTA2LjMsNzIuOSAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdIODcuOGMtMS41LDAtMi43LTEuMi'+
			'0yLjctMi43VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43ICAgQzEwNi4zLDU3LjEsMTA2LjMsNzIuOSwxMDYuMyw3Mi45eiBNNTQuMyw1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43ICAgaDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjUgICBsLTEuOC0xLjhjLTAuNy0w'+
			'LjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjMgICBDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45ICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjcgICBDMT'+
			'A2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xMTguOSwzOTdjMC0zMS0yNS4xLTU2LjEtNTYuMS01Ni4xYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMSAgIEMtMTQ0LDQ1My4xLTExOC45LDQyOC0xMTguOSwzOTd6IE0tMjA5LjcsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuM2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjQgICB2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnogTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUt'+
			'Mi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yICAgYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiBNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjMgICBjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xNTQuNSw0MDYuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRk'+
			'ZGIiBkPSJNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTE1NC41LDQwNi42eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zICAgICBjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6Ii8+CiAgICA8cGF0'+
			'aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMgICAgIGMwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQwNi42TC0yMDkuNyw0MDYuNnoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_show_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xMTIuNiwzOTdjMC0zNC40LTI3LjktNjIuNC02Mi40LTYyLjRjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjQgICBDLTE0MC42LDQ1OS40LTExMi42LDQzMS40LTExMi42LDM5N3ogTS0yMTMuNiw0MDcuNmMtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44ICAgYzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiBNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjct'+
			'MS4yLTIuNy0yLjd2LTE1LjkgICBjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6IE0tMTUyLjIsNDA3LjYgICBjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE1Mi4yLDQwNy42eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGZpbG'+
			'w9IiNGRkZGRkYiIGQ9Ik0tMTUyLjIsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMTUyLjIsNDA3LjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkgICAgIGMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnoiLz4K'+
			'ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSAgICAgYzAsMS41LTEuMiwyLjctMi43LDIuN0wtMjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs+='bottom : 13px;';
		hs+='height : 32px;';
		hs+='left : 200px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzMi4xIiBmaWxsPSIjMTMyOTU5IiBoZWlnaHQ9IjIyLjIiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIHg9Ii0yMDYuMiIgeT0iMzk3Ii8+CiAgIDxwYXRoIGZpbGw9IiMxMzI5NTkiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAt'+
			'Mi4zLDEuOS00LjIsNC4yLTQuMiAgICBoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43ICAgIGMwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40ICAgIGMwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC'+
			'4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkgICAgQy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiAgICBjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZs'+
			'LTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSAgICBjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYgICAgQy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi'+
			'0yNC41ICAgIEMtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzNS43IiBmaWxsPSIjMTMyOTU5IiBoZWlnaHQ9IjI0LjYiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiIHg9Ii0yMDkuNiIgeT0iMzk3Ii8+CiAgIDxwYXRoIGZpbGw9IiMxMzI5NTkiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCAgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQu'+
			'N3YtMjcuMiAgICBjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSAgICBsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkgICAgbDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS'+
			'0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40ICAgIGwxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEgICAgYy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44'+
			'LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSAgICBjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQgICAgQy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiAgICBDLTE2Ny'+
			'45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs+='top : 0px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMyNzI3MjciIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYgICAgYy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40ICAgIGMtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAu'+
			'NS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkgICAgQy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcgICAgYzIuMy'+
			'wwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42ICAgYy0wLjEsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQgICBjMC4y'+
			'LDAuMywwLjQsMC40LDAuOSwwLjNjMC40LDAsMC43LTAuMywwLjgtMC42bDUuMi0xNS40Qy0xNDcuMiwzNzguNC0xNDcuMiwzNzguMS0xNDcuNCwzNzcuOXoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0Mi43LDQyNC42aC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjdjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjQ2LjcgICBDLTEzOC40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMyNzI3MjciIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiAgICBjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSAgICBjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41'+
			'LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSAgICBDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiAgIDxwYXRoIGZpbGw9IiMyNzI3MjciIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgIFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44ICAgIGMyLj'+
			'YsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjIgICBjLTAuMSwwLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYgICBjMC4yLDAu'+
			'MywwLjUsMC40LDEsMC40YzAuNSwwLDAuNy0wLjMsMC44LTAuN2w1LjgtMTcuMUMtMTQ0LjEsMzc2LjMtMTQ0LjEsMzc2LTE0NC4zLDM3NS44eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjEsNDI3LjZoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOGMyLjYsMCw0LjcsMi4xLDQuNyw0Ljd2NTEuOCAgIEMtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs+='top : 0px;';
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
		hs+='bottom : 12px;';
		hs+='height : 32px;';
		hs+='left : 156px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTk2LjEsMzcwLjRjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGM3LjcsMCwxNC45LDIuNiwyMC42LDdsLTYuNCw2LjRjLTQtMi44LTguOS00LjQtMTQuMi00LjRjLTUuOCwwLTExLjEsMi0xNS4zLDUuMyAgIGMtMC42LDAuNS0xLjQsMC40LTItMC4yYy0wLjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcw'+
			'LjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcgICBjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMgICBjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNmMwLDUuMiwxLjcsMTAuMSw0LjUsMTQuMWwtNi40LDYuNGMtNC40LTUuNy03LTEyLjgtNy4xLTIwLjVoLTAuNUgtMjE3LjJ6IE0tMjA3LjIsNDMyLjMgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LT'+
			'Y2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43ICAgYzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40ICAgYy03LjcsMC0xNC44LTIuNi0yMC41LTYuOWw2LjQtNi40YzQsMi43LDguOCw0LjMsMTQsNC4zYzUuOCwwLDExLjEtMiwxNS4zLTUuM2MwLjYtMC41LDEuNC0wLjQsMiwwLjJjMC41LDAuNSwzLjEsMy41LDQsNC40ICAgQy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYu'+
			'OWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCAgIGMtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43ICAgYzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQyLjgsMzYxLjdjMC40LD'+
			'AsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjQgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0xNDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCAgICBjLTUuNy00LjQtMTIuOS03LTIwLjYtN2Mt'+
			'OCwwLTE1LjMsMi44LTIxLjEsNy40Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiAgICBoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LT'+
			'E3LjggICAgQy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA5LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcgICAgYzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyAgICBjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43'+
			'SC0yMDl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjcsNDE2LjZjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40ICAgIGM1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTE5OC41LDM2Ny41YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJjOC42LDAsMTYuNSwyLjksMjIuOSw3LjhsLTcuMiw3LjJjLTQuNS0zLjEtOS45LTQuOS0xNS43LTQuOWMtNi40LDAtMTIuMywyLjItMTcsNS45ICAgYy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4z'+
			'LDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43ICAgYy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUgICBjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjVoLTAuN2MwLjEsNS44LDEuOSwxMS4yLDUsMTUuNmwtNy4xLDcuMWMtNC45LTYuMy03LjgtMTQuMi03LjktMjIuOGgtMC42SC0yMjEuOXogTS0yMTAuNyw0MzYuMyAgIGMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC'+
			'43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44ICAgYzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiAgIGMtOC41LDAtMTYuNC0yLjktMjIuOC03LjdsNy4yLTcuMmM0LjQsMyw5LjgsNC44LDE1LjYsNC44YzYuNCwwLDEyLjMtMi4yLDE3LTUuOWMwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOSAgIEMtMTUwLjcsNDI0LjUtMTUw'+
			'LjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCAgIGMtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYgICBjMC41LDAsMC45LDAuMiwxLjIsMC43YzAuMywwLjUsMC4yLDEuMS0wLjEsMS41TC0xNDEuMSw0MTkuMXoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cG'+
			'F0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOS4zLDM1Ny43YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSAgIHMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1'+
			'LjcsNC45bDcuMi03LjIgICAgYy02LjQtNC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yICAgIGMzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMT'+
			'kuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNiAgICBjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyAgICBjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44'+
			'Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUgICAgYzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNkgtMjEyLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjIgICAgYzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNTMuOSw0MjMuNmMtNS44LDQuNi0xMy4xLDcuNC0yMS4xLDcuNGgwYy0xOC43LDAtMzQtMTUuMi0zNC0zNGgtMC41aC03LjdjLTAuNSwwLTAuOC0wLjItMS4xLTAuN2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zICAgbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMs'+
			'MC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43ICAgYzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnogICAgTS0xNzksMzk3YzAtMi4yLDEuOC00LDQtNGMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Qy0xNzcuMiw0MDEtMTc5LDM5OS4yLTE3OSwzOTd6IE0tMTQ0LjUsNDE2LjkgICBjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC'+
			'0xMi44LTE3LjhjLTAuMy0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcgICBjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMgICBjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGgwYzE4LjcsMCwzNCwxNS4yLDM0LDM0aDAuNWg3LjdjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTMuNyw0MjEuM2MtMC44LTAuOS0zLjUtMy45LTQtNC40Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2gwICAgYy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42ICAgYy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNW'+
			'MwLDE4LjcsMTUuMiwzNCwzNCwzNGgwICAgYzgsMCwxNS4zLTIuOCwyMS4xLTcuNEMtMTUzLjIsNDIzLjEtMTUzLjEsNDIyLTE1My43LDQyMS4zeiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTE4LjctMTUuMi0zNC0zNC0zNGgwYy04LDAtMTUuMywyLjgtMjEuMSw3LjQgICBjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyAgIGgt'+
			'Ny42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICBDLTEzMS41LDM5OC43LTEzMS40LDM5OC4yLTEzMS43LDM5Ny43eiIvPgogIDxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0xNzUiIHI9IjQiIGN5PSIzOTciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNTEuNSw0MjYuNmMtNi40LDUuMS0xNC42LDguMi0yMy41LDguMmgwYy0yMC44LDAtMzcuNy0xNi45LTM3LjctMzcuN2gtMC42aC04LjYgICBjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQuMS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAu'+
			'NmwxNC4yLDE5LjggICBjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkgICBjMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjlDLTE1MC43LDQyNC44LTE1MC43LDQyNi0xNTEuNSw0MjYuNnogTS0xNzkuNCwzOTdjMC0yLjQsMi00LjQsNC40LTQuNCAgIGMyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC'+
			'4zLDAuNC0wLjYsMC42LTEuMiwwLjYgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwICAgYy02LjQsMC0xMi4zLDIuMi0xNyw1LjljLTAuNywwLjUtMS42LDAuNC0yLjItMC4yYy0wLjYtMC42LTMuNS0zLjgtNC40LTQuOWMtMC43LTAuOC0wLjYtMiwwLjItMi42YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJoMCAgIGMyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41'+
			'LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAgICBjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiAgIGMtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC'+
			'4xLDE5LjhjLTAuMywwLjQtMC40LDEtMC4xLDEuNWMwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZoMC42YzAsMjAuOCwxNi45LDM3LjcsMzcuNywzNy43aDAgICBjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjIgICBjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42'+
			'LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43ICAgaC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjZjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOCAgIEMtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6Ii8+CiAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgcj0iNC40IiBjeT0iMzk3Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='bottom : 12px;';
		hs+='height : 81px;';
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9Ijg4N2YzZTA2MWIiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iZmFhZWJjYjE3NSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImEzODYwYTdkM2IiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iN2QxYmM0N2YzNSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIwNDA3YmE4YzYwIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgaGVpZ2h0PSI3MjQiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoIzg4N2YzZTA2MWIpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjZmFhZWJjYjE3NSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMwNDA3YmE4YzYwKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2EzODYwYTdkM2IpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzdkMWJjNDdmMzUpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbD0iIzEzMjk1OSIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggZD0iTSAtMC4wMDE3MjUzNSAxOS41MDE3OSBMIDUxMi4yNTM5ODQgMTkuNTAxNDk3ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMDAwOTkxNzU1LCAwLjc0OTk5OSwgLTAuNzQ5OTk5LCAtMC4wMDA5OTE3NTUsIDU4OC4xNTM2NywgMjEzLjcxMjA0MSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1p'+
			'dGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAtMC4wMDA4MzA0NzEgMTkuNDk3ODY1IEwgNTEzLjE4MTQ4NyAxOS40OTc4NjUgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMCwgMCwgLTAuNzUsIDU3My41MjI4MTUsIDU5OC4yNDgzOTgpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik'+
			'0gLTAuMDAwODY5MTYgMTkuNDk4ODIgTCAyNzEuNzgwMzk1IDE5LjQ5ODgyMSAiIHN0cm9rZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1LCAwLjAwMDAwMDAwMTMwOSwgLTAuMDAwMDAwMDAxMzA5LCAtMC43NSwgMzkyLjQ2ODA5OCwgNDEwLjk1MjIzOSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAwLjAwMDkwNjMzOSAxOS41MDA1NTUgTCAyNTguMjgyMTY5IDE5LjUwMDU1NSAiIHN0cm9r'+
			'ZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjc1LCAwLjc1LCAwLCAzNjIuOTYwNTIyLCA0MDcuNDAzMDI0KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPSJNIC0wLjAwMTgyOTM1IDE5LjQ5NzgzNCBMIDI5Ny4yMjczNTIgMTkuNDk3ODM0ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43NSwgLTAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjAwMDAwMDAwMDAwMDAwMDE4Ni'+
			'wgMC43NSwgMzY0LjQ1MDU5MSwgMjExLjc1MTYyNSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAwLjAwMjQxNzc4IDE5LjQ5OTQ1NSBMIDI1OC4yMTA3NjQgMTkuNDk5NDU1ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDE4OC40ODg2OTEsIDU5NC42Njk3ODIpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1t'+
			'aXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDA3MDU0OTUgMTkuNDk4ODIgTCAxNTAuOTU5MDQ2IDE5LjQ5ODgyICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAuMDAwMDAwMDAxMzA5LCAtMC4wMDAwMDAwMDEzMDksIC0wLjc1LCA1NzMuNTIzOTY3LCA0MTAuOTUyMjM5KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS'+
			'1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPSJNIC0wLjAwMTA4NjgxIDE5LjQ5ODYyOCBMIDE1MC45NjI0NjIgMTkuNDk4NjI4ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDM2NS4yNDMyMTcsIDU4My42MjAyNzkpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDIzNjk5OCAyMC4wMDA5NTcgTCA5NjMuMTQzMjUgMjAuMDAzMTI1ICIgc3Ryb2tlLXdp'+
			'ZHRoPSI0MCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNjE4OTIxLCAwLjQyMzU5OSwgLTAuNDIzNTk5LCAtMC42MTg5MjEsIDcxOS4xMTA1NzUsIDIyNC41MzgxNzIpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._stop_image_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_image_floorplan__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImUyZWMxZjg3ZWEiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iYzYwMmNiYjRhNSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImNhY2MzNGVjZTQiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iN2I3ZDMyYzM3MSI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSIxMTMyYWI5MjQxIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgaGVpZ2h0PSI3MjQiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoI2UyZWMxZjg3ZWEpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjYzYwMmNiYjRhNSkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMxMTMyYWI5MjQxKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NhY2MzNGVjZTQpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzdiN2QzMmMzNzEpIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbD0iIzEzMjk1OSIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggZD0iTSAtMC4wMDE3MjUzNSAxOS41MDE3OSBMIDUxMi4yNTM5ODQgMTkuNTAxNDk3ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMDAwOTkxNzU1LCAwLjc0OTk5OSwgLTAuNzQ5OTk5LCAtMC4wMDA5OTE3NTUsIDU4OC4xNTM2NywgMjEzLjcxMjA0MSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1p'+
			'dGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAtMC4wMDA4MzA0NzEgMTkuNDk3ODY1IEwgNTEzLjE4MTQ4NyAxOS40OTc4NjUgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMCwgMCwgLTAuNzUsIDU3My41MjI4MTUsIDU5OC4yNDgzOTgpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik'+
			'0gLTAuMDAwODY5MTYgMTkuNDk4ODIgTCAyNzEuNzgwMzk1IDE5LjQ5ODgyMSAiIHN0cm9rZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1LCAwLjAwMDAwMDAwMTMwOSwgLTAuMDAwMDAwMDAxMzA5LCAtMC43NSwgMzkyLjQ2ODA5OCwgNDEwLjk1MjIzOSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAwLjAwMDkwNjMzOSAxOS41MDA1NTUgTCAyNTguMjgyMTY5IDE5LjUwMDU1NSAiIHN0cm9r'+
			'ZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjc1LCAwLjc1LCAwLCAzNjIuOTYwNTIyLCA0MDcuNDAzMDI0KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPSJNIC0wLjAwMTgyOTM1IDE5LjQ5NzgzNCBMIDI5Ny4yMjczNTIgMTkuNDk3ODM0ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43NSwgLTAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjAwMDAwMDAwMDAwMDAwMDE4Ni'+
			'wgMC43NSwgMzY0LjQ1MDU5MSwgMjExLjc1MTYyNSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAwLjAwMjQxNzc4IDE5LjQ5OTQ1NSBMIDI1OC4yMTA3NjQgMTkuNDk5NDU1ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDE4OC40ODg2OTEsIDU5NC42Njk3ODIpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1t'+
			'aXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDA3MDU0OTUgMTkuNDk4ODIgTCAxNTAuOTU5MDQ2IDE5LjQ5ODgyICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAuMDAwMDAwMDAxMzA5LCAtMC4wMDAwMDAwMDEzMDksIC0wLjc1LCA1NzMuNTIzOTY3LCA0MTAuOTUyMjM5KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS'+
			'1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPSJNIC0wLjAwMTA4NjgxIDE5LjQ5ODYyOCBMIDE1MC45NjI0NjIgMTkuNDk4NjI4ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDM2NS4yNDMyMTcsIDU4My42MjAyNzkpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDIzODEwMyAxNS4wMDA5MzIgTCA5NjMuMTQzMjYxIDE1LjAwMzEgIiBzdHJva2Utd2lk'+
			'dGg9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC42MTg5MjEsIDAuNDIzNTk5LCAtMC40MjM1OTksIC0wLjYxODkyMSwgNzE2Ljk5MjU3NSwgMjIxLjQ0MzU0NSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
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
			me.elementMouseOver['stop_image_floorplan']=true;
		}
		me._stop_image_floorplan.onmouseleave=function (e) {
			me._stop_image_floorplan__img.style.visibility='inherit';
			me._stop_image_floorplan__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_image_floorplan']=false;
		}
		me._stop_image_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._button_floorplan.appendChild(me._stop_image_floorplan);
		el=me._start_image_floorplan=document.createElement('div');
		els=me._start_image_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9IjdlYmQyNzFlZWUiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gNDMuNjU2MjUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNDMuNjU2MjUgTCA3NjYuMzQzNzUgNzY2Lj'+
			'M0Mzc1IEwgNDMuNjU2MjUgNzY2LjM0Mzc1IFogTSA0My42NTYyNSA0My42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iNjZhZGQ2M2VmMCI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSA0MDUgNDMuNjU2MjUgQyAyMDUuNDMzNTk0IDQzLjY1NjI1IDQzLjY1NjI1IDIwNS40MzM1OTQgNDMuNjU2MjUgNDA1IEMgNDMuNjU2MjUgNjA0LjU2NjQwNiAyMDUuNDMzNTk0IDc2Ni4zNDM3NSA0MDUgNzY2LjM0Mzc1IEMgNjA0LjU2NjQwNiA3NjYuMzQzNzUgNzY2LjM0Mzc1IDYwNC41NjY0MDYgNzY2LjM0Mzc1IDQwNSBDIDc2Ni4zNDM3NSAyMDUuNDMzNTk0IDYw'+
			'NC41NjY0MDYgNDMuNjU2MjUgNDA1IDQzLjY1NjI1IFogTSA0MDUgNDMuNjU2MjUgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImUwMjlkZGY2NTMiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NTYyNSAwLjY1NjI1IEwgNzIzLjM0Mzc1IDAuNjU2MjUgTCA3MjMuMzQzNzUgNzIzLjM0Mzc1IEwgMC42NTYyNSA3MjMuMzQzNzUgWiBNIDAuNjU2MjUgMC42NTYyNSAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iYzUxOWRhYjE0MCI+CiAgIDxwYXRoIGNsaXAtcnVsZT0ibm9uemVybyIgZD0iTSAzNjIgMC42NTYyNSBDIDE2Mi40MzM1OTQgMC42NT'+
			'YyNSAwLjY1NjI1IDE2Mi40MzM1OTQgMC42NTYyNSAzNjIgQyAwLjY1NjI1IDU2MS41NjY0MDYgMTYyLjQzMzU5NCA3MjMuMzQzNzUgMzYyIDcyMy4zNDM3NSBDIDU2MS41NjY0MDYgNzIzLjM0Mzc1IDcyMy4zNDM3NSA1NjEuNTY2NDA2IDcyMy4zNDM3NSAzNjIgQyA3MjMuMzQzNzUgMTYyLjQzMzU5NCA1NjEuNTY2NDA2IDAuNjU2MjUgMzYyIDAuNjU2MjUgWiBNIDM2MiAwLjY1NjI1ICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJhN2UzMTg1NWZiIj4KICAgPHJlY3Qgd2lkdGg9IjcyNCIgaGVpZ2h0PSI3MjQiIHg9IjAiIHk9IjAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgog'+
			'PGcgY2xpcC1wYXRoPSJ1cmwoIzdlYmQyNzFlZWUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjNjZhZGQ2M2VmMCkiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCA0MywgNDMpIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhN2UzMTg1NWZiKSI+CiAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2UwMjlkZGY2NTMpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2M1MTlkYWIxNDApIj4KICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTSAwLjY1NjI1IDAuNjU2MjUgTCA3MjMuMzQzNzUgMC42NTYyNSBMIDcyMy4zNDM3NSA3MjMuMzQzNzUgTCAwLjY1NjI1IDcyMy'+
			'4zNDM3NSBaIE0gMC42NTYyNSAwLjY1NjI1ICIgZmlsbD0iIzI3MjcyNyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAgICA8L2c+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgogPHBhdGggZD0iTSAtMC4wMDE3MzExIDE5LjQ5NzQzNyBMIDUxMi4yNTM5ODUgMTkuNTAyMzUzICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMDAwOTkxNzU1LCAwLjc0OTk5OSwgLTAuNzQ5OTk5LCAtMC4wMDA5OTE3NTUsIDYwNC44MzAwOTMsIDIxMy43MTIwNDEpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1t'+
			'aXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDAwMjU0MTA1IDE5LjQ5Nzg2NSBMIDUxMy4xODIzNDMgMTkuNDk3ODY1ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAsIDAsIC0wLjc1LCA1OTAuMTk5MjM4LCA1OTguMjQ4Mzk4KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPS'+
			'JNIDAuMDAwMDc5NTIxMyAxOS40OTg4MiBMIDI3MS43ODEzNDMgMTkuNDk4ODIxICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzUsIDAuMDAwMDAwMDAxMzA5LCAtMC4wMDAwMDAwMDEzMDksIC0wLjc1LCA0MDkuMTQ0NTkxLCA0MTAuOTUyMjM5KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBkPSJNIDAuMDAwOTA2MzM5IDE5LjQ5OTYxOSBMIDI1OC4yODIxNjkgMTkuNDk5NjE5ICIgc3Ry'+
			'b2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDM3OS42MzcwMDUsIDQwNy40MDMwMjQpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDI0NDMxIDE5LjQ5NzgzNCBMIDI5Ny4yMjY0MTYgMTkuNDk3ODM0ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43NSwgLTAuMDAwMDAwMDAwMDAwMDAwMTg2LCAwLjAwMDAwMDAwMDAwMDAwMDE4Ni'+
			'wgMC43NSwgMzgxLjEyNzA3NCwgMjExLjc1MTYyNSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTSAwLjAwMjQxNzc4IDE5LjQ5ODU1NyBMIDI1OC4yMTA3NjQgMTkuNDk4NTU3ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwgLTAuNzUsIDAuNzUsIDAsIDIwNS4xNjUxNDUsIDU5NC42Njk3ODIpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1t'+
			'aXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gMC4wMDE2NTczOCAxOS40OTg4MiBMIDE1MC45NTk5OTggMTkuNDk4ODIgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43NSwgMC4wMDAwMDAwMDEzMDksIC0wLjAwMDAwMDAwMTMwOSwgLTAuNzUsIDU5MC4yMDA0NjIsIDQxMC45NTIyMzkpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW'+
			'9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0gLTAuMDAxMDg2ODEgMTkuNDk3NzMxIEwgMTUwLjk2MjQ2MiAxOS40OTc3MzEgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC43NSwgMC43NSwgMCwgMzgxLjkxOTY3MSwgNTgzLjYyMDI3OSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._start_image_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_image_floorplan__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgODA5Ljk5OTk5MyIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9Ijk1ZjIxZmIwYzAiPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMC42NjQwNjIgMC42NjQwNjIgTCA3NzkuMzM1OTM4IDAuNjY0MDYyIEwgNzc5LjMzNTkzOCA3Nz'+
			'kuMzM1OTM4IEwgMC42NjQwNjIgNzc5LjMzNTkzOCBaIE0gMC42NjQwNjIgMC42NjQwNjIgIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9ImZhMWE4ZTk3ZTciPgogICA8cGF0aCBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMzkwIDAuNjY0MDYyIEMgMTc0Ljk3NjU2MiAwLjY2NDA2MiAwLjY2NDA2MiAxNzQuOTc2NTYyIDAuNjY0MDYyIDM5MCBDIDAuNjY0MDYyIDYwNS4wMjM0MzggMTc0Ljk3NjU2MiA3NzkuMzM1OTM4IDM5MCA3NzkuMzM1OTM4IEMgNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDc3OS4zMzU5MzggNjA1LjAyMzQzOCA3NzkuMzM1OTM4IDM5MCBDIDc3OS4zMzU5MzggMTc0'+
			'Ljk3NjU2MiA2MDUuMDIzNDM4IDAuNjY0MDYyIDM5MCAwLjY2NDA2MiBaIE0gMzkwIDAuNjY0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSI0MWFlOTZhN2JjIj4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNjY0MDYyIDAuNjY0MDYyIEwgNzc5LjMzNTkzOCAwLjY2NDA2MiBMIDc3OS4zMzU5MzggNzc5LjMzNTkzOCBMIDAuNjY0MDYyIDc3OS4zMzU5MzggWiBNIDAuNjY0MDYyIDAuNjY0MDYyICIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGlkPSJlZDJjNmVkMDE1Ij4KICAgPHBhdGggY2xpcC1ydWxlPSJub256ZXJvIiBkPSJNIDM5MCAwLjY2ND'+
			'A2MiBDIDE3NC45NzY1NjIgMC42NjQwNjIgMC42NjQwNjIgMTc0Ljk3NjU2MiAwLjY2NDA2MiAzOTAgQyAwLjY2NDA2MiA2MDUuMDIzNDM4IDE3NC45NzY1NjIgNzc5LjMzNTkzOCAzOTAgNzc5LjMzNTkzOCBDIDYwNS4wMjM0MzggNzc5LjMzNTkzOCA3NzkuMzM1OTM4IDYwNS4wMjM0MzggNzc5LjMzNTkzOCAzOTAgQyA3NzkuMzM1OTM4IDE3NC45NzY1NjIgNjA1LjAyMzQzOCAwLjY2NDA2MiAzOTAgMC42NjQwNjIgWiBNIDM5MCAwLjY2NDA2MiAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iMDI2NzQ4MzY3NSI+CiAgIDxyZWN0IHdpZHRoPSI3ODAiIGhlaWdodD0iNzgwIiB4PSIw'+
			'IiB5PSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggaWQ9Ijg1ZmY5Y2JhM2MiPgogICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9Ijc4MCIgeD0iMCIgeT0iMCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAxNSwgMTUpIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjODVmZjljYmEzYykiPgogICA8ZyBjbGlwLXBhdGg9InVybCgjOTVmMjFmYjBjMCkiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2ZhMWE4ZTk3ZTcpIj4KICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtMC4wMDAwMDAwMDAwMDAwMDE3NzYsID'+
			'AuMDAwMDAwMDAwMDAwMDM5MDgpIj4KICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoIzAyNjc0ODM2NzUpIj4KICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCM0MWFlOTZhN2JjKSI+CiAgICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2VkMmM2ZWQwMTUpIj4KICAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNIDAuNjY0MDYyIDAuNjY0MDYyIEwgNzc5LjMzNTkzOCAwLjY2NDA2MiBMIDc3OS4zMzU5MzggNzc5LjMzNTkzOCBMIDAuNjY0MDYyIDc3OS4zMzU5MzggWiBNIDAuNjY0MDYyIDAuNjY0MDYyICIgZmlsbD0iIzI3MjcyNyIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogICAg'+
			'ICAgIDwvZz4KICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogICA8cGF0aCBkPSJNIC0wLjAwMTcyODk1IDE5LjUwMjMzMSBMIDUxMi4yNTI4NjkgMTkuNTAxNjk4ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMDAxMDY4NTgsIDAuODA4MSwgLTAuODA4MSwgLTAuMDAxMDY4NTgsIDYwNS4zMTA2MiwgMTgzLjg5MzMzMSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMS'+
			'IvPgogICA8cGF0aCBkPSJNIC0wLjAwMDY5MDQwMSAxOS41MDAxMzkgTCA1MTMuMTgxNTM4IDE5LjUwMDEzOSAiIHN0cm9rZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjgwODEwMSwgMCwgMCwgLTAuODA4MTAxLCA1ODkuNTQ2MzE3LCA1OTguMjE5MDIxKSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0gMC4wMDEwMzE0NiAxOS40OTg5OTEgTCAyNzEuNzgwMTQzIDE5LjQ5ODk5MiAiIHN0cm9r'+
			'ZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjgwODEwMSwgMC4wMDAwMDAwMDE0MTA0LCAtMC4wMDAwMDAwMDE0MTA0LCAtMC44MDgxMDEsIDM5NC40NjU2NzcsIDM5Ni40MTM0MDcpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTSAtMC4wMDA3OTgyMzYgMTkuNDk5NDIyIEwgMjU4LjI4MjE2OCAxOS40OTk0MjIgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC44MD'+
			'gxMDEsIDAuODA4MTAxLCAwLCAzNjIuNjcyMTgzLCAzOTIuNTg5MTk5KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0gLTAuMDAwNDE1NjI4IDE5LjUwMDA0NSBMIDI5Ny4yMjg5ODUgMTkuNTAwMDQ1ICIgc3Ryb2tlLXdpZHRoPSIzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MDgxMDEsIC0wLjAwMDAwMDAwMDAwMDAwMDIsIDAuMDAwMDAwMDAwMDAwMDAwMiwgMC44MDgxMDEsIDM2NC4yNzc2OCwgMTgxLjc4'+
			'MTA1NSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogICA8cGF0aCBkPSJNIC0wLjAwMDA5MzkzMTYgMTkuNDk4OTE2IEwgMjU4LjIxMDM2NCAxOS40OTg5MTYgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLCAtMC44MDgxMDEsIDAuODA4MTAxLCAwLCAxNzQuNjg0MzExLCA1OTQuMzYzMjA1KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNC'+
			'IgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0gMC4wMDA5MTMzMjQgMTkuNDk4OTkxIEwgMTUwLjk2MjQ1NCAxOS40OTg5OTIgIiBzdHJva2Utd2lkdGg9IjM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44MDgxMDEsIDAuMDAwMDAwMDAxNDEwNCwgLTAuMDAwMDAwMDAxNDEwNCwgLTAuODA4MTAxLCA1ODkuNTQ3NjEzLCAzOTYuNDEzNDA3KSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9r'+
			'ZS1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0gMC4wMDA4NDk3NjEgMTkuNTAxMTI5IEwgMTUwLjk2MjM5IDE5LjUwMTEyOSAiIHN0cm9rZS13aWR0aD0iMzkiIHRyYW5zZm9ybT0ibWF0cml4KDAsIC0wLjgwODEwMSwgMC44MDgxMDEsIDAsIDM2NS4xMzE3NDEsIDU4Mi40NTc3MTgpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
			me.elementMouseOver['start_image_floorplan']=true;
		}
		me._start_image_floorplan.onmouseleave=function (e) {
			me._start_image_floorplan__img.style.visibility='inherit';
			me._start_image_floorplan__imgo.style.visibility='hidden';
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
		me._tooltip_btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._button_floorplan.appendChild(me._tooltip_btn_floorplan);
		me.divSkin.appendChild(me._button_floorplan);
		el=me._sound_on_off=document.createElement('div');
		el.ggId="sound_on_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 32px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYgICBjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJDLTE3Mi4zLDM3MS4xLTE3Mi4zLDQyMi45LTE3Mi4zLDQyMi45eiBNLTE1NSwzOTdj'+
			'MCw0LjctMS42LDkuMy00LjgsMTMuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwICAgbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyAgIGMwLjYtMC42LDEuNi0wLjYsMi4yLDBDLTE1Ni42LDM4Ny43LTE1NSwzOTIuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDAgICBsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmM0LjktNS40LDcuMy0xMi4zLDcuMy0xOS'+
			'4yaDBjMC02LjktMi40LTEzLjgtNy4zLTE5LjJjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjctMS43ICAgYzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYgICBjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTUxLjhD'+
			'LTE3Mi4zLDM2OS42LTE3My4zLDM2OS0xNzQuNiwzNjkuOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuOSwzNzRjLTAuNi0wLjYtMS42LTAuNi0yLjEsMGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS42LDAsMi4yYzQuOSw1LjQsNy4zLDEyLjMsNy4zLDE5LjJoMCAgICBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS41LDAuNiwyLjEsMGM1LjktNi41LDguOS0xNC44LDguOS0yM2gwICAgIEMtMTQwLjksMzg4LjctMTQzLjksMzgwLjUtMTQ5LjksMzc0eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRk'+
			'ZGIiBkPSJNLTE2MiwzODRsLTEuNywxLjdjLTAuNiwwLjYtMC42LDEuNCwwLDIuMmMyLjIsMi43LDMuMiw2LDMuMiw5LjJoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjIgICAgYy0wLjYsMC43LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC00LjctMS42LTkuMy00LjgtMTMuMSAgICBDLTE2MC40LDM4My40LTE2MS40LDM4My40LTE2MiwzODR6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4xLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43ICAgaDE2bDI4LjEtMTkuNmMxLjQtMSwyLjYtMC40LDIuNiwxLjNDLTE3MiwzNjguMi0xNzIsNDI1LjgtMTcyLDQyNS44eiBNLTE1Mi43LDM5N2MwLDUu'+
			'Mi0xLjgsMTAuNC01LjMsMTQuNWMtMC43LDAuNi0xLjgsMC42LTIuNCwwICAgbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44ICAgYzAuNi0wLjYsMS44LTAuNiwyLjQsMEMtMTU0LjUsMzg2LjYtMTUyLjcsMzkxLjgtMTUyLjcsMzk3TC0xNTIuNywzOTd6IE0tMTM3LjEsMzk3YzAsOS4yLTMuMywxOC40LTkuOSwyNS42ICAgYy0wLjcsMC42LTEuNywwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNy'+
			'w4LjItMjEuM2gwYzAtNy42LTIuNy0xNS4zLTguMi0yMS4zICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYgICBjMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41'+
			'Qy0xNzIsMzY2LjUtMTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ3LjEsMzcxLjRjLTAuNy0wLjYtMS43LTAuNi0yLjQsMGwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS43LDAsMi40YzUuNCw2LDguMiwxMy43LDguMiwyMS4zaDAgICAgYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOGMwLjcsMC43LDEuNywwLjcsMi40LDBjNi42LTcuMiw5LjktMTYuNCw5LjktMjUuNmgwICAgIEMtMTM3LjEsMzg3LjgtMTQwLjUsMzc4LjYtMTQ3LjEsMzcxLjR6Ii8+CiAgIDxwYXRoIGZpbGw9Ii'+
			'NGRkZGRkYiIGQ9Ik0tMTYwLjUsMzgyLjVsLTEuOCwxLjhjLTAuNywwLjctMC43LDEuNiwwLDIuNGMyLjQsMywzLjYsNi42LDMuNiwxMC4zaDBjMCwzLjYtMS4yLDcuMy0zLjYsMTAuMyAgICBjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNiwwLjYsMS44LDAuNiwyLjQsMGMzLjYtNC4yLDUuMy05LjMsNS4zLTE0LjVoMGMwLTUuMi0xLjgtMTAuNC01LjMtMTQuNSAgICBDLTE1OC43LDM4MS45LTE1OS45LDM4MS45LTE2MC41LDM4Mi41eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQgICBDLTIxNS4xLDQwNi40LTIxNS44LDQwNS44LTIxNS44LDQwNC45eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTEyLjQt'+
			'OC43bDE0LjctMTQuN1Y0MjIuOXogTS0xNTUsMzk3ICAgYzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiAgIGw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43ICAgYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNS45LTEuOC0xMS44LT'+
			'UuNC0xNi44bDMuOC0zLjhDLTE0My4yLDM4Mi40LTE0MC45LDM4OS43LTE0MC45LDM5NyAgIEwtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTE0MC4xLDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yICAgIGwxLjcsMS43YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMtMTM5LjUsMzY1LjQtMTM5LjUsMzY0LjQtMTQwLjEsMzYzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjYsNDI0LjFjMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTIyLjJsLTE0LjcsMTQuN0wtMTc0LjYsNDI0LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik'+
			'0tMTk0LjUsNDEwLjJsMjIuMi0yMi4ydi0xNi45YzAtMS41LTEtMi4xLTIuMy0xLjJsLTI1LjMsMTcuNmgtMTQuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41djE1LjggICAgYzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40TC0xOTQuNSw0MTAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuOSwzOTAuNGMxLDIuMSwxLjYsNC4zLDEuNiw2LjZoMGMwLDMuMy0xLjEsNi41LTMuMiw5LjJjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43ICAgIGMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEu'+
			'OSwzOTAuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyAgICBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDBjMC03LjMtMi4zLTE0LjYtNy0yMC43TC0xNTEuNywzODAuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sound_on_0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_on_0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzEzMjk1OSIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjIgICBoLTE2Qy0yMTkuNSw0MDcuNS0yMjAuMyw0MDYuNy0yMjAuMyw0MDUuOHogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0xMy44LTku'+
			'NmwxNi4zLTE2LjNWNDI1Ljh6IE0tMTUyLjcsMzk3ICAgYzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCAgIGw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOCAgIGMtMC43LTAuNy0wLjctMS43LDAtMi40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC'+
			'02LjYtMi0xMy4xLTYtMTguN2w0LjMtNC4zQy0xMzkuNywzODAuOC0xMzcuMSwzODguOS0xMzcuMSwzOTdMLTEzNy4xLDM5N3ogICAgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zICAgYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQgICAgbDEuOCwxLjhjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MtMTM1LjYsMzYxLjktMTM1LjYsMzYwLjgtMTM2LjIsMzYwLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsNDI3LjFjMS40LDEsMi42LDAuNCwyLjYtMS4zdi0yNC42bC0xNi4zLDE2LjNMLTE3NC41LDQyNy4xeiIvPg'+
			'ogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Ni42LDQxMS43TC0xNzIsMzg3di0xOC44YzAtMS43LTEuMi0yLjMtMi42LTEuM2wtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjYgICAgYzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNkwtMTk2LjYsNDExLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjUsMzg5LjZjMS4yLDIuMywxLjcsNC44LDEuNyw3LjRoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zYy0wLjcsMC44LTAuNywxLjcsMCwyLjRsMS44LDEuOCAgICBjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQu'+
			'NWgwYzAtNC4xLTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDBjMC04LjEtMi42LTE2LjItNy43LTIzTC0xNDkuMSwzNzguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYgICBjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWNDIyLjl6IE0tMTM2LDM5OS43aC05bDAsOWMwLDAuOC0wLjcsMS41LTEuNSwxLjVo'+
			'LTIuM2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtOWgtOSAgIGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0yLjNjMC0wLjgsMC43LTEuNSwxLjUtMS41aDlsMC05YzAtMC44LDAuNy0xLjUsMS41LTEuNWgyLjNjMC44LDAsMS41LDAuNywxLjUsMS41bDAsOWg5ICAgYzAuOCwwLDEuNSwwLjcsMS41LDEuNXYyLjNDLTEzNC41LDM5OS0xMzUuMiwzOTkuNy0xMzYsMzk5Ljd6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LDM5NC4zaC05bDAtOWMwLTAuOC0wLjctMS41LTEuNS0xLjVoLT'+
			'IuM2MtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsOWgtOWMtMC44LDAtMS41LDAuNy0xLjUsMS41djIuMyAgICBjMCwwLjgsMC43LDEuNSwxLjUsMS41aDlsMCw5YzAsMC44LDAuNywxLjUsMS41LDEuNWgyLjNjMC44LDAsMS41LTAuNywxLjUtMS41bDAtOWg5YzAuOCwwLDEuNS0wLjcsMS41LTEuNXYtMi4zICAgIEMtMTM0LjUsMzk1LTEzNS4yLDM5NC4zLTEzNiwzOTQuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYg'+
			'ICAgYzEuMywwLjksMi4zLDAuMywyLjMtMS4ydi01MS44Qy0xNzIuMywzNjkuNi0xNzMuMywzNjktMTc0LjYsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4yLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43ICAgaDE2bDI4LjEtMTkuNmMxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDI1Ljh6IE0tMTMxLjcsNDAwaC0xMGwwLDEwYzAsMC45LTAuOCwxLjctMS43LDEu'+
			'N2gtMi42Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC0xMGgtMTAgICBjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMi42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxMGwwLTEwYzAtMC45LDAuOC0xLjcsMS43LTEuN2gyLjZjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsMTBoMTAgICBjMC45LDAsMS43LDAuOCwxLjcsMS43djIuNkMtMTMwLDM5OS4yLTEzMC44LDQwMC0xMzEuNyw0MDB6IiBmaWxsLW9wYWNpdHk9IjAuODYyNzQ1Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk0aC0xMGwwLTEwYzAtMC45LTAuOC0xLjctMS'+
			'43LTEuN2gtMi42Yy0wLjksMC0xLjcsMC44LTEuNywxLjdsMCwxMGgtMTBjLTAuOSwwLTEuNywwLjgtMS43LDEuNyAgICB2Mi42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxMGwwLDEwYzAsMC45LDAuOCwxLjcsMS43LDEuN2gyLjZjMC45LDAsMS43LTAuOCwxLjctMS43bDAtMTBoMTBjMC45LDAsMS43LTAuOCwxLjctMS43di0yLjYgICAgQy0xMzAsMzk0LjgtMTMwLjgsMzk0LTEzMS43LDM5NHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4'+
			'LjEsMTkuNiAgICBjMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUtMTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xICAgQy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOCAgIGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWNDIyLjl6IE0tMTM2LjYsMzk5LjdoLTIyLjJjLTAuOCww'+
			'LTEuNS0wLjctMS41LTEuNXYtMi4zICAgYzAtMC44LDAuNy0xLjUsMS41LTEuNWgyMi4yYzAuOCwwLDEuNSwwLjcsMS41LDEuNXYyLjNDLTEzNS4xLDM5OS0xMzUuOCwzOTkuNy0xMzYuNiwzOTkuN3oiIGZpbGwtb3BhY2l0eT0iMC44NjI3NDUiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuNiwzOTQuM2gtMjIuMmMtMC44LDAtMS41LDAuNy0xLjUsMS41djIuM2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMjIuMmMwLjgsMCwxLjUtMC43LDEuNS0xLjV2LTIuMyAgICBDLTEzNS4xLDM5NS0xMzUuOCwzOTQuMy0xMzYuNiwzOTQuM3'+
			'oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYgICAgYzEuMywwLjksMi4zLDAuMywyLjMtMS4ydi01MS44Qy0xNzIuMywzNjkuNi0xNzMuMywzNjktMTc0LjYsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sound_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sound_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzI3MjcyNyIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgQy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMjguMS0xOS42aC0xNmMtMC45LDAtMS43LTAuOC0xLjctMS43di0xNy42ICAgYzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjQyNS44eiBNLTEzMi40LDQwMEgtMTU3Yy0wLjks'+
			'MC0xLjctMC44LTEuNy0xLjd2LTIuNiAgIGMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMjQuN2MwLjksMCwxLjcsMC44LDEuNywxLjd2Mi42Qy0xMzAuNywzOTkuMi0xMzEuNCw0MDAtMTMyLjQsNDAweiIgZmlsbC1vcGFjaXR5PSIwLjg2Mjc0NSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMi40LDM5NEgtMTU3Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2Mi42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gyNC43YzAuOSwwLDEuNy0wLjgsMS43LTEuN3YtMi42ICAgIEMtMTMwLjcsMzk0LjgtMTMxLjQsMzk0LTEzMi40LDM5NHoiLz4KIC'+
			'AgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNiAgICBjMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUtMTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs+='bottom : 3px;';
		hs+='height : 55px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
			player.openUrl("https:\/\/minastenisclube.com.br\/","_blank");
		}
		me._mtc.onmouseenter=function (e) {
			me._mtc.style.transition='none';
			me._mtc.ggParameter.sx=1.05;me._mtc.ggParameter.sy=1.05;
			me._mtc.style.transform=parameterToTransform(me._mtc.ggParameter);
			skin.updateSize(me._mtc);
			me.elementMouseOver['mtc']=true;
		}
		me._mtc.onmouseleave=function (e) {
			me._mtc.style.transition='none';
			me._mtc.ggParameter.sx=1;me._mtc.ggParameter.sy=1;
			me._mtc.style.transform=parameterToTransform(me._mtc.ggParameter);
			skin.updateSize(me._mtc);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHkxPSI4IiB5Mj0iMjQiIHgyPSI4IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4MT0iOCIgeTE9IjgiIHkyPSIyNCIgeDI9IjI0IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjciIHkxPSI5IiB5Mj0iMjciIHgyPSI5IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4MT0iOSIgeTE9IjkiIHkyPSIyNyIgeDI9IjI3IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
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
		hs+='top : 0px;';
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
					me._mainmenu.style.width='153px';
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
					me._dropdown_menu_f1.style.width='153px';
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
		hs+='height : 119px;';
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
					me._dropdown_background_f1.style.width='152px';
					me._dropdown_background_f1.style.height='99px';
					skin.updateSize(me._dropdown_background_f1);
				}
				else {
					me._dropdown_background_f1.style.width='218px';
					me._dropdown_background_f1.style.height='119px';
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
					me._dropdown_scrollarea_f1.style.width='151px';
					me._dropdown_scrollarea_f1.style.height='95px';
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
					me._dropdown_cloner_f1.ggWidth=139;
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
					me._dropdown_menu_title_background_f1.style.width='152px';
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
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility=(Number(me._maozinha.style.opacity)>0||!me._maozinha.style.opacity)?'inherit':'hidden';
			me._maozinha.ggVisible=true;
			me._seta.style.transition='none';
			me._seta.style.visibility='hidden';
			me._seta.ggVisible=false;
			me.elementMouseOver['dropdown_menu_title_background_f1']=true;
			me._dropdown_menu_title_background_f1.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background_f1.onmouseleave=function (e) {
			me._maozinha.style.transition='none';
			me._maozinha.style.visibility='hidden';
			me._maozinha.ggVisible=false;
			me._seta.style.transition='none';
			me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
			me._seta.ggVisible=true;
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
		hs+='left : 0px;';
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
			var hs = player._("Sal\xe3o Sede M1\n", params);
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
					me._dropdown_menu_title_f1.style.width='137px';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZlcnNpb249Ij'+
			'EuMSIgd2lkdGg9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeT0iMHB4IiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxwb2x5Z29uIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
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
					me._dropdown_open_f1.style.left='135px';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZlcnNpb249Ij'+
			'EuMSIgd2lkdGg9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeT0iMHB4IiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxwb2x5Z29uIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
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
					me._dropdown_close_f1.style.left='135px';
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
		hs+='left : 198px;';
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
					me._btn_menu_fechar.style.left='132px';
					me._btn_menu_fechar.style.top='0px';
				}
				else {
					me._btn_menu_fechar.style.left='198px';
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
		hs+='z-index: 9999;';
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
		el=me._minas_1_sede=document.createElement('div');
		els=me._minas_1_sede__img=document.createElement('img');
		els.className='ggskin ggskin_minas_1_sede';
		hs=basePath + 'images/minas_1_sede.png';
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
		el.ggId="Minas 1 Sede";
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
		me._minas_1_sede.ggIsActive=function() {
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
		me._minas_1_sede.ggUpdatePosition=function (useTransition) {
		}
		me._intro_screen.appendChild(me._minas_1_sede);
		me.divSkin.appendChild(me._intro_screen);
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
		hs+='left : -5px;';
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
		hs+='top : 0px;';
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
		me.elementMouseOver['text_2']=false;
		me._thumbnail_menu.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu']=false;
		me.elementMouseOver['thumbnail_cloner']=false;
		me._thumbnail.logicBlock_visible();
		me.elementMouseOver['thumbnail']=false;
		me._thumbnail_hide_button.logicBlock_alpha();
		me.elementMouseOver['thumbnail_hide_button']=false;
		me._thumbnail_show_button.logicBlock_alpha();
		me.elementMouseOver['thumbnail_show_button']=false;
		me.elementMouseOver['button_fullscreen']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me.elementMouseOver['button_auto_rotate']=false;
		me._stop_rotate_image.logicBlock_visible();
		me.elementMouseOver['stop_rotate_image']=false;
		me._start_rotate_image.logicBlock_visible();
		me.elementMouseOver['start_rotate_image']=false;
		me.elementMouseOver['button_floorplan']=false;
		me.elementMouseOver['stop_image_floorplan']=false;
		me.elementMouseOver['start_image_floorplan']=false;
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
		me._mainmenu.logicBlock_size();
		me._dropdown_menu_f1.logicBlock_size();
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
		me.elementMouseOver['btn_menu_open']=false;
		me._btn_entrar.logicBlock_scaling();
		me.elementMouseOver['btn_entrar']=false;
		me._seta.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
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
			me._dropdown_scrollarea_f1.ggUpdatePosition();
			if (player.transitionsDisabled) {
				me._borda.style.transition='none';
			} else {
				me._borda.style.transition='all 3000ms ease 1000ms';
			}
			me._borda.style.opacity='1';
			me._borda.style.visibility=me._borda.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._minas_1_sede.style.transition='none';
			} else {
				me._minas_1_sede.style.transition='all 1000ms ease 500ms';
			}
			me._minas_1_sede.style.opacity='1';
			me._minas_1_sede.style.visibility=me._minas_1_sede.ggVisible?'inherit':'hidden';
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
			me._thumbnail.logicBlock_visible();
			me._rectangle_2.logicBlock_position();
			me._rectangle_2.logicBlock_size();
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
			me._btn_entrar.logicBlock_scaling();
		});
		player.addListener('varchanged_esconder_cursor', function(event) {
			me._ring_white.logicBlock_visible();
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_opt_hotspot_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
		});
		player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_varchanged_opt_thumbnail_menu_tooltip(event);
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
					me._dropdown_menu_text.style.width='125px';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgdmlld0JveD0iMCAwIDM2IDM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxwb2x5bGluZSBmaWxsPS'+
			'Jub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjYzJlODEyIiBzdHJva2Utb3BhY2l0eT0iMSIgcG9pbnRzPSIzMCw5ICYjeGE7JiN4OTsxMy41LDI1LjUgNiwxOCAiLz4KPC9zdmc+Cg==';
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
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == true))
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
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
			me.ggEvent_varchanged_opt_thumbnail_menu_tooltip=function(event) {
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEgICBDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUgICBjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQtMS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0w'+
			'LjUsMS40LTAuNSwyLDBsNy4yLDcuMkwtMTY3LjksMzY2LjZ6ICAgIE0tMTU0LjksMzk0YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjV2MTEuNGMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN0wtMTU0LjksMzk0eiBNLTE1NC42LDM4MyAgIGMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjIgICBjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLj'+
			'QsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCAgIGMtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjljMC45LTAuOSwyLjQtMC45LDMuMywwbDEwLDkuN0wtMTY3LDQwMy40eiBNLTEzNy45LDQyMCAgIGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMiAgIGMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEt'+
			'MS4xLTEuOXYtNDUuOGMwLTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMgICBsLTQuMSw0LjFjLTcuOC0wLjktMTUuMS0yLjYtMjEuMS01djM4LjljOC45LTMuNiwyMC42LTUuNiwzMi42LTUuNmMxMiwwLDIzLjYsMiwzMi42LDUuNnYtMzguOWMtOC45LDMuNi0yMC42LDUuNi0zMi42LDUuNiAgIGMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMTM3LjksNDIweiIvPgogPC'+
			'9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43ICAgIEMtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMDUuOCw0MDcuM3Y2LjdjOC44LTMuMSwxOS42LTQuOCwzMC44LTQuOGMwLjcsMCwxLjMsMCwyLDBsNC4yLTQuMWMtMi0wLjEtNC4xLTAuMS02LjItMC4xICAgIEMtMTg2LjMsNDA1LTE5Ny4zLDQwNS44LTIwNS44LDQwNy4zeiIv'+
			'PgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0NC4yLDQxMy45di0xMS40bC04LjctOC41Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMiAgICBDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkgICAgQy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRk'+
			'ZGRiIgZD0iTS0xOTkuOCwzODQuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMS4yLDEuMmMtMC41LDAuNS0wLjUsMS40LDAsMmw3LjgsNy44YzAuNSwwLjUsMS43LDEuNSwyLDEuNSAgICBjMC4zLDAuMSwwLjgsMC4xLDEuMSwwYzAuMy0wLjEsMS40LTEsMi0xLjVsMjUuMy0yNS4zYzAuNS0wLjUsMC41LTEuNCwwLTJsLTEuMi0xLjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTI0LjcsMjQuNyAgICBMLTE5OS44LDM4NC4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTguNiw2LjEtMzAsNi41bC00LjYsNC42'+
			'YzAuMiwwLDAuNSwwLDAuNywwICAgIGMxMiwwLDIzLjYtMiwzMi42LTUuNnYzOC45Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjljNiwyLjQsMTMuMyw0LjEsMjEuMSw1bDQuMS00LjEgICAgYy0xMC4xLTAuNy0xOS41LTIuOS0yNi41LTYuM2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjkgICAgYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNy'+
			'wwLjMsMS41LDAuMywyLjItMC4xICAgIGMwLjctMC40LDEuMS0xLjEsMS4xLTEuOXYtNDUuOEMtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMiAgIGMtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0xLjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42'+
			'LTEuNiwwLTIuMmwxLjMtMS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGw4LDhMLTE2Ny4xLDM2My4yeiBNLTE1Mi43LDM5My43YzAuMy0wLjMsMC43LTAuNSwxLjEtMC41czAuOCwwLjIsMS4xLDAuNGw5LjYsOS40djEyLjcgICBjLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUgICBDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC'+
			'0yNC41LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICBjMi4zLDAsNC42LDAsNi45LDAuMUwtMTcyLjgsNDEwLjV6IE0tMTY2LjIsNDA0LjFjLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40YzEtMSwyLjYtMSwzLjcsMCAgIGwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICBzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAu'+
			'NSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xICAgYzAuNy0wLjUsMS42LTAuNSwyLjQtMC4xYzcuOCwzLjgsMTguMiw2LjIsMjkuNCw3bC00LjYsNC42Yy04LjYtMC45LTE2LjctMi44LTIzLjQtNS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjIgICBzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMSAgIGMwLjcsMC41LDEuMiwxLjMsMS'+
			'4yLDIuMUwtMTMzLjgsNDIyLjVMLTEzMy44LDQyMi41eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCAgICBDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0w'+
			'LjEtNi45LTAuMSAgICBDLTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkgICAgQy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zICAgIEMtMTU1LjksMz'+
			'g3LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43ICAgIGMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUgICAgTC0yMDIuNiwzODIuN3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzUs'+
			'MzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiAgICBjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xICAgIGMwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNG'+
			'MwLjQsMCwwLjctMC4xLDEuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xICAgIHMxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xICAgIEMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNiAgICBjLTEyLjgsMC0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yYy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0x'+
			'LjEtMS45di00NS44YzAtMC44LDAuNC0xLjUsMS4xLTEuOSAgICBjMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjOC43LDQuMiwyMSw2LjYsMzMuOCw2LjZjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45ICAgIEMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYgICAgQy0xODcsMz'+
			'gzLjMtMTk4LjYsMzgxLjItMjA3LjYsMzc3Ljd6IE0tMTc1LDQwOS4xYy0xMS4xLDAtMjIsMS43LTMwLjgsNC44di02LjdjOC41LTEuNCwxOS40LTIuMywzMC44LTIuM2MyLjEsMCw0LjEsMCw2LjIsMC4xICAgIGwtNC4yLDQuMUMtMTczLjcsNDA5LjItMTc0LjMsNDA5LjEtMTc1LDQwOS4xeiBNLTE0NC4yLDQxMy45Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43bDE1LjYtMTUuMmMwLjMtMC4zLDAuNi0wLjQsMS0wLjQgICAgYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0wLjQsNC40LDAuNiw0'+
			'LjcsMi4zICAgIGMwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMuMiwzODkuOWwxMCw5LjdsLTMuOCwzLjcgICAgYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOUMtMTc1LjYsMzg5LTE3NC4xLDM4OS0xNzMuMiwzODkuOXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkwLjcsNDAzLjhjNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLD'+
			'AsOCwwLjFsMy44LTMuN2wtMTAtOS43Yy0wLjktMC45LTIuNC0wLjktMy4zLDAgICAgTC0xOTAuNyw0MDMuOHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjEgICAgQy0xNzAuOSw0MDUtMTcyLjksNDA1LTE3NSw0MDV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjksMzkzLjZjLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE1LjYsMTUuMmM5LjUsMC40LDE4LjcsMiwyNi4zLDQuN3YtMTEuNGwtOC43LTguNSAgICBD'+
			'LTE1My4yLDM5My44LTE1My41LDM5My42LTE1My45LDM5My42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTguNyw0LjItMjEsNi42LTMzLjgsNi42Yy0xMi45LDAtMjUuMi0yLjQtMzMuOC02LjYgICAgYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yICAgIGM4LjctNC4yLDIxLTYuNiwzMy44LTYuNmMxMi44LDAsMjUuMiwyLjQsMzMuOCw2LjZjMC43LD'+
			'AuMywxLjUsMC4zLDIuMi0wLjFjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjggICAgQy0xMzcuOSwzNzMuNC0xMzguMywzNzIuNy0xMzksMzcyLjN6IE0tMTQyLjQsNDE2LjVjLTguOS0zLjYtMjAuNi01LjYtMzIuNi01LjZzLTIzLjYsMi0zMi42LDUuNnYtMzguOSAgICBjOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45ICAgIEMtMTU3'+
			'LjgsMzg4LjYtMTU1LjcsMzg5LjYtMTUzLjQsMzg5LjJ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC43Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40ICAgIEMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMgICAgcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAuMi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUt'+
			'MS4yLTEuMy0xLjItMi4xdi01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMSAgICBjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjOS42LDQuNiwyMy4zLDcuMywzNy42LDcuM2MxNC4zLDAsMjgtMi43LDM3LjYtNy4zYzAuOC0wLjQsMS43LTAuMywyLjQsMC4xYzAuNywwLjUsMS4yLDEuMywxLjIsMi4xICAgIEMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMiw2LjIgICAgQy'+
			'0xODguMywzODEuNy0yMDEuMywzNzkuNS0yMTEuMiwzNzUuNXogTS0xNzUsNDEwLjVjLTEyLjQsMC0yNC40LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUgICAgYzIuMywwLDQuNiwwLDYuOSwwLjFsLTQuNiw0LjVDLTE3My41LDQxMC41LTE3NC4zLDQxMC41LTE3NSw0MTAuNXogTS0xNDAuOCw0MTUuOGMtOC40LTMtMTguNi00LjgtMjkuMi01LjJsMTcuMy0xNi45ICAgIGMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0'+
			'LjksMC42LDUuMywyLjUgICAgYzAuNCwxLjktMS40LDMuOC0zLjksNC4zYy0yLjUsMC41LTQuOS0wLjYtNS4zLTIuNUMtMTU2LjYsMzgzLjktMTU0LjgsMzgyLTE1Mi4zLDM4MS41eiBNLTE3MywzODkuMWwxMS4xLDEwLjhsLTQuMiw0LjEgICAgYy0yLjktMC4xLTUuOS0wLjItOC44LTAuMmMtNiwwLTExLjgsMC4yLTE3LjQsMC42bDE1LjgtMTUuNEMtMTc1LjYsMzg4LjEtMTc0LDM4OC4xLTE3MywzODkuMXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjQsNDA0LjVjNS42LTAuNCwxMS40LTAuNiwxNy40LTAuNm'+
			'MzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOGMtMS0xLTIuNi0xLTMuNiwwICAgIEwtMTkyLjQsNDA0LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNSAgICBDLTE3MC40LDQwNS45LTE3Mi43LDQwNS45LTE3NSw0MDUuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNiwzOTMuMmMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjljMTAuNiwwLjQsMjAuOCwyLjMsMjku'+
			'Miw1LjJ2LTEyLjdsLTkuNi05LjQgICAgQy0xNTAuNywzOTMuNC0xNTEuMSwzOTMuMi0xNTEuNiwzOTMuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy05LjYsNC42LTIzLjMsNy4zLTM3LjYsNy4zcy0yOC0yLjctMzcuNi03LjMgICAgYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yICAgIGM5LjYtNC42LDIzLjMtNy4zLDM3LjYtNy4zYzE0LjMsMC'+
			'wyOCwyLjcsMzcuNiw3LjNjMC44LDAuNCwxLjcsMC4zLDIuNC0wLjFzMS4yLTEuMywxLjItMi4xdi01MC45ICAgIEMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXogTS0xMzguOCw0MTguN2MtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzkuOSw0LDIyLjksNi4yLDM2LjIsNi4yICAgIGMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4z'+
			'ICAgIEMtMTU1LjksMzg3LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
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
		el.ggDy=-100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 249px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 100px);';
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
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._cone_de_navegao.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._cone_de_navegao.logicBlock_alpha();
			me._cone_de_navegao.logicBlock_scaling();
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
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
		hs+='border-radius : 3px;';
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
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 11px);';
		hs+='position : absolute;';
		hs+='top : -82px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
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
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
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
				((player.getVariableValue('opt_3d_preview') == true))
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
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
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
		me.elementMouseOver['ht_node']=false;
		me._hs_preview_image.logicBlock_alpha();
		me._hs_visited.logicBlock_visible();
		me._hs_tt.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage0.style.height=hotspot.customimageheight + 'px';
			let d = 4;
			me._ht_node_customimage0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage0.logicBlock_visible();
		me._cone_de_navegao.logicBlock_scaling();
		me._cone_de_navegao.logicBlock_visible();
		me._cone_de_navegao.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._cone_de_navegao.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
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