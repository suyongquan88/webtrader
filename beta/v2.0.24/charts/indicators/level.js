define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,e){var f=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d};require(["css!charts/indicators/level.css"]),require(["text!charts/indicators/level.html"],function(g){var h="#cd0a0a";g=a(g),g.appendTo("body"),g.find("input[type='button']").button(),g.find("#level_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var i="Solid";a("#level_dashStyle").ddslick({imagePosition:"left",width:118,background:"white",onSelected:function(b){a("#level_dashStyle .dd-selected-image").css("max-width","85px"),i=b.selectedData.value}}),a("#level_dashStyle .dd-option-image").css("max-width","85px"),g.dialog({autoOpen:!1,resizable:!1,width:280,modal:!0,my:"center",at:"center",of:window,dialogClass:"level-ui-dialog",buttons:[{text:"OK",click:function(){var c=a("input.level_input_width_for_level");return _.isInteger(_.toNumber(c.val()))&&_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1)?(d&&d([new f(parseFloat(g.find(".level_input_width_for_level").val()),h,parseInt(g.find("#level_strokeWidth").val()),i)]),void b.call(g)):(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),c.val(c.prop("defaultValue")),void(isValid=!1))}},{text:"Cancel",click:function(){b.call(this)}}]}),g.find("select").selectmenu({width:120}),a.isFunction(e)&&e(c,d)})}var d=void 0;return{open:function(b,e){return d=e,0==a(".level").length?void c(b,this.open):void(a(".level").dialog("isOpen")||a(".level").dialog("open"))}}});