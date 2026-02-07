
// modal
//!function(t){var n={show:!0,backdrop:!0,backdropClick:!0,keyboard:!0,autoPosition:!0,dialogMarginTop:20,width:null,top:null,left:null},o={BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},i={MODAL:".modal",DIALOG:".modal-dialog",CONTENT:".modal-content",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]'};t.fn.modal=function(e){function s(){var n=t(window).height(),o=r.find(i.DIALOG).height(),e=n/2-o/2;e<g.settings.dialogMarginTop&&(e=g.settings.dialogMarginTop),g.settings.top&&(e=g.settings.top),t(i.DIALOG).css({marginTop:e})}function a(){t(document).off("focusin").on("focusin",function(n){f===n.target||t(f).has(n.target).length||f.focus()})}function d(){t(document).find("."+o.BACKDROP).length||t(h).appendTo(document.body)}function c(){t("."+o.BACKDROP).remove(),h=null}function u(){t(document.body).addClass(o.OPEN),d(),r.show(),g.settings.width&&t(i.DIALOG).css({width:g.settings.width,marginLeft:"auto",marginRight:"auto"}),t(i.DIALOG).css({marginLeft:g.settings.left}),g.settings.autoPosition&&s(),a(),r.focus()}function l(){t(document.body).removeClass(o.OPEN),c(),r.hide(),t(i.DIALOG).css("margin-top",""),t(document).off("focusin")}if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).modal(e)}),this;var g={},r=this,f=r[0],h=null,m=function(){g.settings=t.extend({},n,e),r.attr("tabindex","-1"),g.settings.backdrop?(h=document.createElement("div"),h.className=o.BACKDROP):h=null,r.on("click",function(t){t.target===t.currentTarget&&g.settings.backdrop&&g.settings.backdropClick&&l()}),g.settings.keyboard&&t(document.body).on("keydown",function(t){27===t.which&&l()})};return m(),g.settings.show?u():l(),t(window).bind("resize",function(){s()}),this},t(document).on("click",i.DATA_TOGGLE,function(n){var o=t(this).attr("data-target");"A"===this.tagName&&n.preventDefault(),t(o).modal()}),t(document).on("click",i.DATA_DISMISS,function(){t(i.MODAL).modal({show:!1})})}(jQuery);
! function(t) {
    var n = {
            show: !0,
            backdrop: !0,
            backdropClick: !0,
            keyboard: !0,
            autoPosition: !0,
            dialogMarginTop: 20,
            width: null,
            top: null,
            left: null
        },
        o = {
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        },
        i = {
            MODAL: ".modal",
            DIALOG: ".modal-dialog",
            CONTENT: ".modal-content",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]'
        };
    t.fn.modal = function(e) {
        function s() {
            var n = t(window).height(),
                o = r.find(i.DIALOG).height(),
                e = n / 2 - o / 2;
            e < g.settings.dialogMarginTop && (e = g.settings.dialogMarginTop), g.settings.top && (e = g.settings.top), t(i.DIALOG).css({
                marginTop: e
            })
        }

        function a() {
            t(document).off("focusin").on("focusin", function(n) {
                f === n.target || t(f).has(n.target).length || f.focus()
            })
        }

        function d() {
            t(document).find("." + o.BACKDROP).length || t(h).appendTo(document.body)
        }

        function c() {
            t("." + o.BACKDROP).remove(), h = null
        }

        function u() {
            //t(document.body).addClass(o.OPEN), 
			
			if($('.review_list').length > 0) {
				t(document.body).addClass('hidden');
			}
			
			d(), r.show(), g.settings.width && t(i.DIALOG).css({
                width: g.settings.width,
                marginLeft: "auto",
                marginRight: "auto"
            }), t(i.DIALOG).css({
                marginLeft: g.settings.left
            }), g.settings.autoPosition && s(), a(), r.focus()
        }

        function l() {
            t(document.body).removeClass(o.OPEN), c(), r.hide(), t(i.DIALOG).css("margin-top", ""), t(document).off("focusin")
			
			if($('.review_list').length > 0) {
				t(document.body).removeClass('hidden');
			}
        }
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).modal(e)
        }), this;
        var g = {},
            r = this,
            f = r[0],
            h = null,
            m = function() {
                g.settings = t.extend({}, n, e), r.attr("tabindex", "-1"), g.settings.backdrop ? (h = document.createElement("div"), h.className = o.BACKDROP) : h = null, r.on("click", function(t) {
                    t.target === t.currentTarget && g.settings.backdrop && g.settings.backdropClick && l()
                }), g.settings.keyboard && t(document.body).on("keydown", function(t) {
                    27 === t.which && l()
                })
            };
        return m(), g.settings.show ? u() : l(), t(window).bind("resize", function() {
            s()
        }), this
    }, t(document).on("click", i.DATA_TOGGLE, function(n) {
        var o = t(this).attr("data-target");
        "A" === this.tagName && n.preventDefault(), t(o).modal();
    }), t(document).on("click", i.DATA_DISMISS, function() {
		
        t(i.MODAL).modal({
            show: !1
        })
		return false;
    })
}(jQuery);


$( document ).ready(function() {

    $('#nav .dep1').on('mouseenter',function(){
        $('.sub-nav').stop().animate({
            'height':'61px'
        },700,'easeOutQuint');
    });

    $('#nav .dep1, .sub-nav').on('mouseleave',function(){
        $('.sub-nav').stop(true,false).animate({
            'height':'0px'
        },700,'easeOutQuint',function(){
            $('.sub-nav').removeClass('open')
        });
    });
	

    // tab
    $('#tab > li > a').on('click',function(){
        var tabIdx = $(this).parent().index();
        $('#tabContent > div').hide();
        $('#tabContent > div').eq(tabIdx).show();
        $('#tab > li > a').removeClass('active');
        $(this).addClass('active');
    });

});