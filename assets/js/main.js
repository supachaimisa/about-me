/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

	// IE: Fixes.
		if (browser.name == 'ie') {

			// Fix min-height/flexbox.
				$window.on('--refresh', function() {

					$wrapper.css('height', 'auto');

					window.setTimeout(function() {

						var h = $wrapper.height(),
							wh = $window.height();

						if (h < wh)
							$wrapper.css('height', '100vh');

					}, 0);

				});

				$window.on('resize load', function() {
					$window.triggerHandler('--refresh');
				});

			// Fix intro pic.
				$('.panel.intro').each(function() {

					var $pic = $(this).children('.pic'),
						$img = $pic.children('img');

					$pic
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('visibility', 'hidden');

				});

		}

})(jQuery);

// A $( document ).ready() block.
$(document).ready(function() {
    // console.log( "ready!" );

	var $skills_block = $('#skills-block');
	const data_skills = [
		[
			{ name: 'JavaSctipt', logo_path: '/images/skills/Javascript-logo.png' },
			{ name: 'TypeScript', logo_path: '/images/skills/Typescript.png' },
			{ name: 'NodeJs\nExpressJs', logo_path: '/images/skills/nodejs-expressjs.png' },
			{ name: 'NestJs', logo_path: '/images/skills/nestjs_logo_icon.png' },
			{ name: 'GraphQL', logo_path: '/images/skills/graphQL.png' },
			{ name: 'Mongodb', logo_path: '/images/skills/mongodb.png' },
		],
		[
			{ name: 'Strapi', logo_path: '/images/skills/strapi.png' },
			{ name: 'TypeORM', logo_path: '/images/skills/typeorm.png' },
			{ name: 'Sequelize', logo_path: '/images/skills/sequelize.png' },
			{ name: 'SQLserver', logo_path: '/images/skills/sqlserver.png' },
			{ name: 'Git', logo_path: '/images/skills/git.jpg' },
			{ name: 'Microsoft visual studio', logo_path: '/images/skills/Visual_Studio_Icon_2022.png' },
		],
		[
			{ name: 'SQL', logo_path: '/images/skills/sql.png' },
			{ name: 'ReactJs', logo_path: '/images/skills/reactjs.png' },
			{ name: 'ReactNative', logo_path: '/images/skills/reactnative.png' },
			{ name: 'AngularJs', logo_path: '/images/skills/angularjs.png' },
			{ name: 'Elastic search', logo_path: '/images/skills/elasticsearch.png' },
			{ name: 'Jenkins', logo_path: '/images/skills/jenkins.png' },
		],
	];

	// Render
	let template_skills = ``;
	// console.log('template_skills: ', template_skills);
	for (let i = 0; i < data_skills.length; i++) {
		const item = data_skills[i];
		const sk1 = item[0];
		const sk2 = item[1];
		const sk3 = item[2];
		const sk4 = item[3];
		const sk5 = item[4];
		const sk6 = item[5];

		const col_sk1 = `
		<div class="col-4">
			<img  src="${sk1.logo_path}" width="100px" alt="">
			<br>
			${sk1.name}
		</div>
		`;
		const col_sk2 = `
		<div class="col-4">
			<img  src="${sk2.logo_path}" width="100px" alt="">
			<br>
			${sk2.name}
		</div>
		`;
		const col_sk3 = `
		<div class="col-4">
			<img  src="${sk3.logo_path}" width="100px" alt="">
			<br>
			${sk3.name}
		</div>
		`;
		const col_sk4 = `
		<div class="col-4">
			<img  src="${sk4.logo_path}" width="100px" alt="">
			<br>
			${sk4.name}
		</div>
		`;
		const col_sk5 = `
		<div class="col-4">
			<img  src="${sk5.logo_path}" width="100px" alt="">
			<br>
			${sk5.name}
		</div>
		`;
		const col_sk6 = `
		<div class="col-4">
			<img  src="${sk6.logo_path}" width="100px" alt="">
			<br>
			${sk6.name}
		</div>
		`;

		template_skills += `
		<div class="row"  style="overflow-wrap: break-word; margin-bottom: 1em;">
			<div class="col-6">
				<div class="row">
					${col_sk1}
					${col_sk2}
					${col_sk3}
				</div>
				
			</div>
			<div class="col-6">
				<div class="row">
					${col_sk4}
					${col_sk5}
					${col_sk6}
				</div>
			</div>
		</div>
		`
	}

	$skills_block.html(template_skills);
});