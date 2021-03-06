/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         // to test if all feeds are defined and not null
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         // To test all url in the feeds are not null and defined
         it('URL is defined and not Empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         // TO test all the namesin the feeds are defined and not null
         it('name is defined and not Empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });

    });
    /* TODO: Write a new test suite named "The menu" */

    describe('The menu' , function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         // To test if the menu icon is hidden by default
         it('has hidden menu', function(){
           expect($(body).hasClass('menu-hidden')).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


          // To test if on the first click menu is not hidden and on the second
          // click menu should be hidden
          const menu = $(menu-icon-link);
          it('change visibility when icon is clicked', function(){
            menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
      });

    /* TODO: Write a new test suite named "Initial Entries" */4


    describe('Initial Entries', function(){

      // Load function is called to check
      beforeEach(function(done){
        loadFeed(0,done);
      });



        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // To test entry within the feed container
         it('single entry element within the feed container', function(){
           expect($('.feed .entry').length).toBegreaterThan(0);
         });

       });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New feed Selection',function(){

        var oldFeed;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         // Load function is called to check if content changes
         it('new feed is loaded',function(){
           beforeEach(function(done){
             loadFeed(0,function(){
               oldFeed = $('.feed').html();
               //fectch new feeds
               loadFeed(1,done);
             });
           });

           });

           // to check if new feed and old feed is different
           it('different from old', function() {
           expect($('.feed').html()).not.toBe(oldFeed);
       });
   });

}());
