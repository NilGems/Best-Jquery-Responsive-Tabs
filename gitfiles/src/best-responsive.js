/***************************
jQuery Best Responsive tabs
Author: Niladri Shekhar Mondal <nldrmondal35@gmail.com>
URL: https://nilgems.github.io/Best-Jquery-Responsive-Tabs/
*****************************/
(function($){
    "use strict";
    $.fn.laraGemsBestResponsiveTabs = function(options) {
        var _self = this, 
            setting = $.extend({
                container: _self.attr('data-target-content'),
                break_point: 767,
                active_tab_index: 0
            }, options),
            tabPanelInstance = function(container) { return typeof container instanceof jQuery ? container : $(container) },
            tabPanelItems = function(containerInstance) { return containerInstance ? containerInstance.children() : null },
            tabItems = function(tab) { tab = !tab ? _self : tab; return tab.children(); },
            prepareBreakPointContents = function() {
                var _responsoveTabItems = [], 
                    _tabs = tabItems(),
                    _tabPanel = tabPanelInstance(setting.container),
                    _tabPanelItem = tabPanelItems(_tabPanel),
                    _on_item_event = {
                        click: function(event) {
                            event.preventDefault();
                            $(this).trigger('lgTabItem:click', event);
                        }
                    };
                _tabs.each(function(default_index, default_element){
                    var _element = $(default_element),
                        _index = _element.attr('data-target-index') ? parseInt(_element.attr('data-target-index')) : default_index,
                        _new_tab_wrap = $('<div/>', { class: 'best-reponsive-tab-item' }),
                        _new_tab_item = $('<div/>', { class: 'best-reponsive-tab-item-trigger' + (setting.active_tab_index === _index ? ' lgTabToggle-tab-active' : ''), role: 'tab', 'data-trigger-index': _index, html: _element.html(), on: _on_item_event}),
                        _new_tab_content = $('<div/>', {class: 'best-reponsive-tab-item-content-triggerer' + (setting.active_tab_index === _index ? ' lgTabToggle-tab-content-active' : '') + (setting.with_animation ? ' slideInDown' : ''), role: 'tabpanel', html: _tabPanelItem.eq(_index).html()}),
                        _instance_html = _new_tab_wrap.append(_new_tab_item).append(_new_tab_content);
                        if(setting.active_tab_index === _index) { _tabPanelItem.eq(_index).addClass('lgTabToggle-tab-content-active'); }
                    _responsoveTabItems.push(_instance_html);
                });

                return _responsoveTabItems;
            },
            breakPoint = function() {
                var current_window_width = $(window).innerWidth();
                // console.log('debug-responsive', 'current window size:'+ current_window_width, 'limit size:' + setting.break_point);
                if(setting.break_point) {
                    if(current_window_width > setting.break_point) {
                        _self.removeClass('lgTabToggle-tab-responsive-active');
                        tabPanelInstance(setting.container).removeClass('lgTabToggle-tab-responsive-active');
                    } else if(current_window_width <= setting.break_point) {
                        _self.addClass('lgTabToggle-tab-responsive-active');
                        tabPanelInstance(setting.container).addClass('lgTabToggle-tab-responsive-active');
                    }
                }
            };
            _self.on('lgTabItem:click', '.best-reponsive-tab-item-trigger', function(event){ 
                var _element = $(this), 
                    _trigger_index = _element.attr('data-trigger-index'),
                    _tabPanel = tabPanelInstance(setting.container),
                    _tabPanelItem = tabPanelItems(_tabPanel),
                    _self_trigger_element = _element.closest('.best-reponsive-tab-item').children('.best-reponsive-tab-item-content-triggerer'),
                    _previous_active = {
                        tab: _element.closest('.best-responsive-tab').find('.best-reponsive-tab-item-trigger.lgTabToggle-tab-active'),
                        desktop_tab_panel: _tabPanel.children('.lgTabToggle-tab-content-active'),
                        mobile_tab_panel: _element.closest('.best-responsive-tab').find('.best-reponsive-tab-item-content-triggerer.lgTabToggle-tab-content-active')
                    },
                    _next_active = {
                        tab: _element,
                        desktop_tab_panel:  _tabPanelItem.eq(_trigger_index),
                        mobile_tab_panel: _self_trigger_element
                    };

                    _self.trigger('lgTabItem:toogle', [_previous_active, _next_active]);

                    if(!_previous_active.desktop_tab_panel.is(_tabPanelItem.eq(_trigger_index))) {
                        _previous_active.desktop_tab_panel.removeClass('lgTabToggle-tab-content-active');
                        _next_active.desktop_tab_panel.addClass('lgTabToggle-tab-content-active');
                     }
                    if(!_previous_active.mobile_tab_panel.is(_self_trigger_element))
                    {
                        _previous_active.mobile_tab_panel.removeClass('lgTabToggle-tab-content-active');
                        _next_active.mobile_tab_panel.addClass('lgTabToggle-tab-content-active');
                    }
                    if(!_previous_active.tab.is(_element)) {
                        _previous_active.tab.removeClass('lgTabToggle-tab-active');
                        _next_active.tab.addClass('lgTabToggle-tab-active');
                    } 
             });
             _self.html(prepareBreakPointContents());
             $(window).on('resize', breakPoint);
             $(breakPoint);
             _self.addClass('init');
             tabPanelInstance(setting.container).addClass('init');
    };
})(jQuery);