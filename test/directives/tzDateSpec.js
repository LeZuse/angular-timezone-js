'use strict'

describe('tzDate', function () {
  var scope, $filter, $compile, $timeout, $sandbox

  beforeEach(module('timezonejs', function ($provide) {
    $provide.value('timezonesURL', 'base/js/lib/timezones.json')
  }))

  beforeEach(inject(function ($injector, $rootScope, _$filter_, _$compile_, _$timeout_) {
    scope = $rootScope
    $filter = _$filter_
    $compile = _$compile_
    $timeout = _$timeout_

    $sandbox = $('<div id="sandbox"></div>').appendTo($('body'))
  }))

  var compile = function (scenario) {
    scenario = scenarios[scenario]
    angular.extend(scope, scenario.scope)

    var $element = $(scenario.markup).appendTo($sandbox)

    $element = $compile($element)(scope)
    scope.$digest()

    return $element
  }

  afterEach(function () {
    $sandbox.remove()
    scope.$destroy()
  })

  var scenarios = [
    {
      scope : {
        reference : new Date(Date.parse('1970-01-01T00:00:00+00:00')),
        timezone : 'America/New_York',
        expected : {
          fullYear : 1969,
          month : 11,
          date : 31,
          hours : 20
        }
      },
      markup : '<span>{{reference|tzDate:timezone|date:"yyyy-MM-dd HH:mm:ss Z"}}</span>'
    },
    {
      scope : {
        reference : new Date(Date.parse('1970-01-01T00:00:00+00:00')),
        timezone : 'America/Los_Angeles',
        expected : {
          fullYear : 1969,
          month : 11,
          date : 31,
          hours : 17
        }
      },
      markup : '<span>{{reference|tzDate:timezone|date:"yyyy-MM-dd HH:mm:ss Z"}}</span>'
    }
  ]

  it('should align dates to expected timezones', function () {
    scenarios.forEach(function (scenario) {
      var timezone = scenario.scope.timezone
        , reference = scenario.scope.reference
        , expected = scenario.scope.expected

      var aligned = $filter('tzDate')(reference, timezone)

      expect(aligned.getTimezone()).toEqual(timezone)

      expect(aligned.getFullYear()).toEqual(expected.fullYear)
      expect(aligned.getMonth()).toEqual(expected.month)
      expect(aligned.getDate()).toEqual(expected.date)
      expect(aligned.getHours()).toEqual(expected.hours)
    })
  })

//  it('should support date formatting for America/New_York', function () {
//    var el = compile('America/New_York')
//    expect(el.html()).toEqual('1969-12-31 19:00:00 -0500')
//  })

})