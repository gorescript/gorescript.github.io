$(function() {
	$(document).tooltip({
		items: "[data-tooltip]",
		track: true,
		show: false,
		hide: false,
		position: {
			my: "left+20 top+20"
		},

		content: function() {
			var element = $(this);
			var value = element.attr("data-tooltip");
			var html = $(".tooltip-" + value).html();
			return html;
		}
	});
});