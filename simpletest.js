import { Selector } from 'testcafe';


fixture `Example page`
    .page `http://devexpress.github.io/testcafe/example/`;

test('Input text', async t => {
    const developerNameInput = Selector('#developer-name');

    await t
        .expect(developerNameInput.value).eql('')
        .typeText(developerNameInput, 'Peter Parker')
        .expect(developerNameInput.value).contains('Peter')

    //await t.wait(5000);
});

test('Text content', async t => {

    await t
        .expect(Selector('.form-bottom').textContent).contains('scale')
        .expect(Selector('.row .column:nth-child(2)').textContent).contains('Operating')
        .expect(Selector('label').withText('Advanced').textContent).contains('analysis')

    //await t.wait(1000);
});
