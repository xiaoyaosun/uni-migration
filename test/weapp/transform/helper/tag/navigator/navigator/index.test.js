const rewriter = require('../../../util')

describe('template.tag.navigator', () => {

  it('rewrite `navigator`', () => {
    const fixture = `
<navigator url="http://www.dcloud.io" open-type="navigate" delta="1" hover-class="navigator-hover" hover-stop-propagation="false" hover-start-time="50" hover-stay-time="600">
</navigator> 
`

    const expected = `<div class="u-w-navigator" data-url="http://www.dcloud.io" onclick="$handleRouterEvent('navigate')"></div>`

    rewriter.assertTemplateString(fixture, expected)
  })

})