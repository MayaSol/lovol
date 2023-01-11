/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }

  const Choices = require('choices.js');

  // Включим отдельно
  // const choices = new Choices('#some-if', {/* options */});

  // Или тупо найдём все селекты и включим на них Choices
  const selects = document.querySelectorAll('.field-select__select');
  selects.forEach(function(item){
    var customIcon = item.dataset.icon;
    new Choices(item, {
      searchEnabled: false,
      placeholderValue: 'Выберите',
      allowHTML: true,
      customIcon: customIcon,
      callbackOnCreateTemplates: function(strToEl) {
        var classNames = this.config.classNames;
        var itemSelectText = this.config.itemSelectText;
        return {
          item: function(classNames, data) {
            return strToEl(
              '\
          <div\
            class="' +
                String(classNames.item) +
                ' ' +
                String(
                  data.highlighted
                    ? classNames.highlightedState
                    : classNames.itemSelectable
                ) +
                '"\
            data-item\
            data-id="' +
                String(data.id) +
                '"\
            data-value="' +
                String(data.value) +
                '"\
            ' +
                String(data.active ? 'aria-selected="true"' : '') +
                '\
            ' +
                String(data.disabled ? 'aria-disabled="true"' : '') +
                '\
            >\
           <i class="fa-solid fa-' + this.config.customIcon + '"></i> ' +
                String(data.label) +
                '\
          </div>\
        '
            );
          },
        };
      },
    });
  });

});
