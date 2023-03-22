// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"

//= require semantic-ui
//= require semantic-ui/modal
//= require semantic-ui/dropdown
//= require jquery3
//= require rails_ujs
//= require turbolinks
//= require_tree .

// $("div").each(function(){console.log(this)})
// $(".item").addEventListener("click", function() {
//   $('.ui.dropdown').dropdown();
// })
$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
})
