var timezonejs = angular.module('timezonejs', []);

timezonejs.factory('Timezone', function() {
	var _tz = timezoneJS.timezone;
	_tz.loadingScheme = _tz.loadingSchemes.MANUAL_LOAD;
	// TODO: load with ang?
	_tz.loadZoneJSONData('js/lib/timezones.json', true);
	timezoneJS.fromLocalString = function(str, tz) {
        // https://github.com/csnover/js-iso8601/blob/master/iso8601.js – MIT license

        var minutesOffset = 0;
        var struct = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(str);
        var numericKeys = [ 1, 4, 5, 6, 7, 10, 11 ];
        // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
        for (var i = 0, k; (k = numericKeys[i]); ++i) {
            struct[k] = +struct[k] || 0;
        }

        // allow undefined days and months
        struct[2] = (+struct[2] || 1) - 1;
        struct[3] = +struct[3] || 1;

        return new timezoneJS.Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7], tz);
	};
	return timezoneJS;
});

timezonejs.filter('tzDate', function(Timezone) {
    return function(dt, tz) {
        console.log('ar', arguments);
        return new Timezone.Date(dt, tz);
    };
});
