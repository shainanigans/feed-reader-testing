$(function() {
    // Test existing features of RSS Feeds
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have valid URL defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                // Expect there to be a URL
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);

                // Expect the URL to have valid URL elements
                // URL regex from http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without
                expect(allFeeds[i].url).toMatch(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/g);
            }
        });

        it('have valid name defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // Test existing features of the menu
    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('changes visibility when icon is clicked', function() {
           // Check that the first click displays the menu
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBeFalsy();

           // Check that the next click hides the menu
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    // Test existing features of the initial entries
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least one entry', function() {
            expect(document.getElementsByClassName('entry').length).not.toBe(0);
        });
    });

    // Test existing features of the new feed selection
    describe('New Feed Selection', function() {

        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            // Refresh the data
            loadFeed(0, function() {
                // Store the first feed's data
                firstFeed = $('.feed').html();
                done();
            });
        });

        // Reset the setup after running each spec to default feed
        afterAll(function() {
            loadFeed(0);
        });

        it('has changed the content', function(done) {
            // Load a different feed and store its data
            loadFeed(1, function() {
                secondFeed = $('.feed').html();

                // Compare the two htmls
                expect(firstFeed).not.toEqual(secondFeed);

                done();
            });
        });
    });

    // Test for not yet developed "load more" functionality
    describe('Load more button', function() {

        var entryCount,
            newEntryCount;

        beforeEach(function(done) {
            // Reset the data
            loadFeed(0, function() {
                // Store the first feed's data
                entryCount = $('.entry').length;
                done();
            });
        });

        // Reset the setup after running each spec to default entry count
        afterAll(function() {
            loadFeed(0);
        });

        xit('has loaded more entries', function(done) {
            // Load a different feed and store its data
            loadMore(function() {
                newEntryCount =  $('.entry').length;

                // Compare the first entry count with the second
                expect(entryCount).toBeLessThan(newEntryCount);

                done();
            });
        });
    });

    // Test for not yet developed link to feed home page
    describe('Header title', function() {

        xit('links to feed home page', function() {
            // Expect there to be an anchor tag and elements of a valid url
            expect($('.header-title').html()).toMatch('<a');
            expect($('.header-title a').attr('href').length).not.toBe(0);
            expect($('.header-title a').attr('href')).toMatch(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/g);
        });
    });
}());
