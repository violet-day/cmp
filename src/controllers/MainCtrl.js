/**
 * Created by 烬云 on 14-4-12.
 */
angular.module('cmp')
  .controller('MainCtrl', ['$scope', '$state', 'localStorageService',
    function ($scope, $state, localStorageService) {

      //登出
      $scope.singOut = function () {
        window.localStorage.clear();
        $state.go('login');
      };
    }])
  .controller('SideBarCtrl', ['$scope', '$state',
    function ($scope, $state) {
      var sidebarWidth = 225;
      var sidebarCollapsedWidth = 35;
      var _getViewPort = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
          a = 'client';
          e = document.documentElement || document.body;
        }
        return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
        }
      }
      var handleSidebarState = function () {
        // remove sidebar toggler if window width smaller than 992(for tablet and phone mode)
        var viewport = _getViewPort();
        if (viewport.width < 992) {
          $('body').removeClass("page-sidebar-closed");
        }
      }

      // Set proper height for sidebar and content. The content and sidebar height must be synced always.
      var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.page-sidebar');
        var body = $('body');
        var height;

        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
          var available_height = $(window).height() - $('.footer').outerHeight() - $('.header').outerHeight();
          if (content.height() < available_height) {
            content.attr('style', 'min-height:' + available_height + 'px !important');
          }
        } else {
          if (body.hasClass('page-sidebar-fixed')) {
            height = _calculateFixedSidebarViewportHeight();
          } else {
            height = sidebar.height() + 20;
            var headerHeight = $('.header').outerHeight();
            var footerHeight = $('.footer').outerHeight();
            if ($(window).width() > 1024 && (height + headerHeight + footerHeight) < $(window).height()) {
              height = $(window).height() - headerHeight - footerHeight;
            }
          }
          if (height >= content.height()) {
            content.attr('style', 'min-height:' + height + 'px !important');
          }
        }
      }

      // Handle sidebar menu
      var handleSidebarMenu = function () {
        jQuery('.page-sidebar').on('click', 'li > a', function (e) {
          if ($(this).next().hasClass('sub-menu') == false) {
            if ($('.btn-navbar').hasClass('collapsed') == false) {
              $('.btn-navbar').click();
            }
            return;
          }

          if ($(this).next().hasClass('sub-menu always-open')) {
            return;
          }

          var parent = $(this).parent().parent();
          var the = $(this);
          var menu = $('.page-sidebar-menu');
          var sub = jQuery(this).next();

          var autoScroll = menu.data("auto-scroll") ? menu.data("auto-scroll") : true;
          var slideSpeed = menu.data("slide-speed") ? parseInt(menu.data("slide-speed")) : 200;

          parent.children('li.open').children('a').children('.arrow').removeClass('open');
          parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(200);
          parent.children('li.open').removeClass('open');

          var slideOffeset = -200;

          if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(slideSpeed, function () {
              if (autoScroll == true && $('body').hasClass('page-sidebar-closed') == false) {
                if ($('body').hasClass('page-sidebar-fixed')) {
                  menu.slimScroll({'scrollTo': (the.position()).top});
                } else {
                  App.scrollTo(the, slideOffeset);
                }
              }
              handleSidebarAndContentHeight();
            });
          } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(slideSpeed, function () {
              if (autoScroll == true && $('body').hasClass('page-sidebar-closed') == false) {
                if ($('body').hasClass('page-sidebar-fixed')) {
                  menu.slimScroll({'scrollTo': (the.position()).top});
                } else {
                  App.scrollTo(the, slideOffeset);
                }
              }
              handleSidebarAndContentHeight();
            });
          }

          e.preventDefault();
        });

        // handle ajax links within sidebar menu
        jQuery('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
          e.preventDefault();
          App.scrollTop();

          var url = $(this).attr("href");
          var menuContainer = jQuery('.page-sidebar ul');
          var pageContent = $('.page-content');
          var pageContentBody = $('.page-content .page-content-body');

          menuContainer.children('li.active').removeClass('active');
          menuContainer.children('arrow.open').removeClass('open');

          $(this).parents('li').each(function () {
            $(this).addClass('active');
            $(this).children('a > span.arrow').addClass('open');
          });
          $(this).parents('li').addClass('active');

          App.startPageLoading();

          if ($(window).width() <= 991 && $('.page-sidebar').hasClass("in")) {
            $('.navbar-toggle').click();
          }

          $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function (res) {
              App.stopPageLoading();
              pageContentBody.html(res);
              App.fixContentHeight(); // fix content height
              App.initAjax(); // initialize core stuff
            },
            error: function (xhr, ajaxOptions, thrownError) {
              pageContentBody.html('<h4>Could not load the requested content.</h4>');
              App.stopPageLoading();
            }
          });
        });

        // handle ajax link within main content
        jQuery('.page-content').on('click', '.ajaxify', function (e) {
          e.preventDefault();
          App.scrollTop();

          var url = $(this).attr("href");
          var pageContent = $('.page-content');
          var pageContentBody = $('.page-content .page-content-body');

          App.startPageLoading();

          if ($(window).width() <= 991 && $('.page-sidebar').hasClass("in")) {
            $('.navbar-toggle').click();
          }

          $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function (res) {
              App.stopPageLoading();
              pageContentBody.html(res);
              App.fixContentHeight(); // fix content height
              App.initAjax(); // initialize core stuff
            },
            error: function (xhr, ajaxOptions, thrownError) {
              pageContentBody.html('<h4>Could not load the requested content.</h4>');
              App.stopPageLoading();
            }
          });
        });
      }

      // Helper function to calculate sidebar height for fixed sidebar layout.
      var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = $(window).height() - $('.header').height() + 1;
        if ($('body').hasClass("page-footer-fixed")) {
          sidebarHeight = sidebarHeight - $('.footer').outerHeight();
        }

        return sidebarHeight;
      }

      // Handles fixed sidebar
      var handleFixedSidebar = function () {
        var menu = $('.page-sidebar-menu');

        if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
          menu.slimScroll({
            destroy: true
          });
          menu.removeAttr('style');
          $('.page-sidebar').removeAttr('style');
        }

        if ($('.page-sidebar-fixed').size() === 0) {
          handleSidebarAndContentHeight();
          return;
        }

        var viewport = _getViewPort();
        if (viewport.width >= 992) {
          var sidebarHeight = _calculateFixedSidebarViewportHeight();

          menu.slimScroll({
            size: '7px',
            color: '#a1b2bd',
            opacity: .3,
            position: isRTL ? 'left' : 'right',
            height: sidebarHeight,
            allowPageScroll: false,
            disableFadeOut: false
          });
          handleSidebarAndContentHeight();
        }
      }

      // Handles the sidebar menu hover effect for fixed sidebar.
      var handleFixedSidebarHoverable = function () {
        if ($('body').hasClass('page-sidebar-fixed') === false) {
          return;
        }

        $('.page-sidebar').off('mouseenter').on('mouseenter', function () {
          var body = $('body');

          if ((body.hasClass('page-sidebar-closed') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
            return;
          }

          body.removeClass('page-sidebar-closed').addClass('page-sidebar-hover-on');

          if (body.hasClass("page-sidebar-reversed")) {
            $(this).width(sidebarWidth);
          } else {
            $(this).addClass('page-sidebar-hovering');
            $(this).animate({
              width: sidebarWidth
            }, 400, '', function () {
              $(this).removeClass('page-sidebar-hovering');
            });
          }
        });

        $('.page-sidebar').off('mouseleave').on('mouseleave', function () {
          var body = $('body');

          if ((body.hasClass('page-sidebar-hover-on') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
            return;
          }

          if (body.hasClass("page-sidebar-reversed")) {
            $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
            $(this).width(sidebarCollapsedWidth);
          } else {
            $(this).addClass('page-sidebar-hovering');
            $(this).animate({
              width: sidebarCollapsedWidth
            }, 400, '', function () {
              $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
              $(this).removeClass('page-sidebar-hovering');
            });
          }
        });
      }

      // Handles sidebar toggler to close/hide the sidebar.
      var handleSidebarToggler = function () {
        var viewport = _getViewPort();
        if ($.cookie && $.cookie('sidebar_closed') === '1' && viewport.width >= 992) {
          $('body').addClass('page-sidebar-closed');
        }

        // handle sidebar show/hide
        $('.page-sidebar, .header').on('click', '.sidebar-toggler', function (e) {
          var body = $('body');
          var sidebar = $('.page-sidebar');

          if ((body.hasClass("page-sidebar-hover-on") && body.hasClass('page-sidebar-fixed')) || sidebar.hasClass('page-sidebar-hovering')) {
            body.removeClass('page-sidebar-hover-on');
            sidebar.css('width', '').hide().show();
            handleSidebarAndContentHeight(); //fix content & sidebar height
            if ($.cookie) {
              $.cookie('sidebar_closed', '0');
            }
            e.stopPropagation();
            runResponsiveHandlers();
            return;
          }

          $(".sidebar-search", sidebar).removeClass("open");

          if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            if (body.hasClass('page-sidebar-fixed')) {
              sidebar.css('width', '');
            }
            if ($.cookie) {
              $.cookie('sidebar_closed', '0');
            }
          } else {
            body.addClass("page-sidebar-closed");
            if ($.cookie) {
              $.cookie('sidebar_closed', '1');
            }
          }
          handleSidebarAndContentHeight(); //fix content & sidebar height
          runResponsiveHandlers();
        });

        // handle the search bar close
        $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
          e.preventDefault();
          $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
          if (e.which == 13) {
            $('.sidebar-search').submit();
            return false; //<---- Add this line
          }
        });

        // handle the search submit(for sidebar search and responsive mode of the header search)
        $('.sidebar-search .submit').on('click', function (e) {
          e.preventDefault();
          if ($('body').hasClass("page-sidebar-closed")) {
            if ($('.sidebar-search').hasClass('open') == false) {
              if ($('.page-sidebar-fixed').size() === 1) {
                $('.page-sidebar .sidebar-toggler').click(); //trigger sidebar toggle button
              }
              $('.sidebar-search').addClass("open");
            } else {
              $('.sidebar-search').submit();
            }
          } else {
            $('.sidebar-search').submit();
          }
        });

        // header search box:

        // handle the search query submit on enter press
        $('.header .search-form').on('keypress', 'input.form-control', function (e) {
          if (e.which == 13) {
            $('.sidebar-search').submit();
            return false; //<---- Add this line
          }
        });

        //handle header search button click
        $('.header .search-form .submit').on('click', function (e) {
          e.preventDefault();
          $('.header .search-form').submit();
        });
      }
      //layout handlers
      handleFixedSidebar(); // handles fixed sidebar menu
      handleFixedSidebarHoverable(); // handles fixed sidebar on hover effect
      handleSidebarMenu(); // handles main menu
      handleSidebarToggler(); // handles sidebar hide/show
    }])
  .controller('HeaderCtrl', ['$scope', 'Task', '$modal', '$translate', '$state',
    function ($scope, Task, $modal, $translate, $state) {
      $scope.editTask = function (task) {
        $modal.open({
          templateUrl: task.form + '/Edit.html',
          resolve: {
            _id: function () {
              return task._id;
            }
          },
          size: 'lg',
          controller: task.controller//'TaskEditCtrl'
        }).result.then(function () {
            $scope.tasks = Task.selector({filter: JSON.stringify({percent: {$lt: 100}})});
          })
      };

      $scope.changeLanguage = function (language) {
        $scope.$root.language = language;
        window.localStorage.setItem('lang', language);
        $translate.use(language);
      };

      $scope.logOut = function () {
        window.localStorage.clear();
        $state.go('login');
      };
    }])
