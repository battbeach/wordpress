var ajaxWidgets,ajaxPopulateWidgets,quickPressLoad;jQuery(document).ready(function(a){ajaxWidgets=["dashboard_incoming_links","dashboard_primary","dashboard_secondary","dashboard_plugins"];ajaxPopulateWidgets=function(b){show=function(g,c){var f,d=a("#"+g+" div.inside:visible").find(".widget-loading");if(d.length){f=d.parent();setTimeout(function(){f.load("index-extra.php?jax="+g,"",function(){f.hide().slideDown("normal",function(){a(this).css("display","");if("dashboard_plugins"==g&&a.isFunction(tb_init)){tb_init("#dashboard_plugins a.thickbox")}})})},c*500)}};if(b){b=b.toString();if(a.inArray(b,ajaxWidgets)!=-1){show(b,0)}}else{a.each(ajaxWidgets,function(c){show(this,c)})}};ajaxPopulateWidgets();postboxes.add_postbox_toggles("dashboard",{pbshow:ajaxPopulateWidgets});quickPressLoad=function(){var b=a("#quickpost-action"),c;c=a("#quick-press").submit(function(){a("#dashboard_quick_press h3").append('<img src="images/wpspin_light.gif" style="margin: 0 6px 0 0; vertical-align: middle" />');a('#quick-press .submit input[type="submit"], #quick-press .submit input[type="reset"]').attr("disabled","disabled");if("post"==b.val()){b.val("post-quickpress-publish")}a("#dashboard_quick_press div.inside").load(c.attr("action"),c.serializeArray(),function(){a("#dashboard_quick_press h3 img").remove();a('#quick-press .submit input[type="submit"], #quick-press .submit input[type="reset"]').attr("disabled","");a("#dashboard_quick_press ul").find("li").each(function(){a("#dashboard_recent_drafts ul").prepend(this)}).end().remove();tb_init("a.thickbox");quickPressLoad()});return false});a("#publish").click(function(){b.val("post-quickpress-publish")})};quickPressLoad()});