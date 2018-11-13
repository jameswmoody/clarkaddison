// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require_tree .

(function () {
  'use strict';
  $(document).ready(function () {
    $('.timestring').each(function () {
      const timestamp = new Date(this.textContent);
      this.textContent = moment(timestamp).format('MMM Do YYYY, h:mm A');
    });
  });
})();

$(document).ready(function () {
  $('.animated-icon1')
    .click(function () {
      $(this).toggleClass('open');
    });
});

$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});