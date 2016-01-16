$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have valid URL defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('have valid name defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

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

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            // Give the async scripts time to load with setTimeout
            setTimeout(function() {
                done();
            }, 3000);
        });

        it('have at least one entry', function(done) {
            expect(document.getElementsByClassName('entry').length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        
        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            // Store the first feed's data
            firstFeed = $('.feed').html();
            done();
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
}());
