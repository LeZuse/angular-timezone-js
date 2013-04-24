'use strict'

describe('tzDate', function () {
  var scope, $sandbox, $compile, $timeout

  beforeEach(module('timezonejs'))

  beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_) {
    scope = $rootScope
    $compile = _$compile_
    $timeout = _$timeout_

    $sandbox = $('<div id="sandbox"></div>').appendTo($('body'))
  }))

  afterEach(function () {
    $sandbox.remove()
    scope.$destroy()
  })

  it('should work', function () {
    expect(true).toBe(true)
  })

})