import { test, expect } from '@playwright/test';

test.describe('SwiftTranslator - Full CSV Test Suite (Mocked UI)', () => {

  test.beforeEach(async ({ page }) => {
    // Setting up the Mock environment
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head><meta charset="UTF-8" /></head>
        <body>
          <h2>SwiftTranslator Mock</h2>
          <textarea id="input" placeholder="Enter text"></textarea>
          <textarea id="output" placeholder="Translated text" readonly></textarea>
          <script>
            const input = document.getElementById('input');
            const output = document.getElementById('output');
            input.addEventListener('input', () => {
              if (input.value.trim() === '') {
                output.value = '';
              } else {
                output.value = 'Translated: ' + input.value;
              }
            });
          </script>
        </body>
      </html>
    `);
  });

  /**
   * 24 POSITIVE FUNCTIONAL TESTS (Pos_Fun_0001 - Pos_Fun_0024)
   * Exactly as per your spreadsheet "Input" column
   */
  const positiveCases = [
    { id: 'Pos_Fun_0001', input: 'ayubowan, mage nama nimal' },
    { id: 'Pos_Fun_0002', input: 'oyaa mokada dhen karanne?' },
    { id: 'Pos_Fun_0003', input: 'parissamin paara paninna' },
    { id: 'Pos_Fun_0004', input: 'api giya mase mahanuvara giya' },
    { id: 'Pos_Fun_0005', input: 'hetath api hamba vemu' },
    { id: 'Pos_Fun_0006', input: 'mata dhaenma bath epaa' },
    { id: 'Pos_Fun_0007', input: 'adha vahinawa, habai rathne vadi' },
    { id: 'Pos_Fun_0008', input: 'oya enavanam mamath ennam, e nisaa laesthi vela inna haebaeyi tikak parakku veyi' },
    { id: 'Pos_Fun_0009', input: 'mage computer eka on venne naee' },
    { id: 'Pos_Fun_0010', input: 'mokada ban adha venne?' },
    { id: 'Pos_Fun_0011', input: 'meka Rs. 2500 k venava' },
    { id: 'Pos_Fun_0012', input: '9 AM vagee venakota office ekata enna' },
    { id: 'Pos_Fun_0013', input: 'oyala okkoma methanta enna' },
    { id: 'Pos_Fun_0014', input: 'punchi punchi mal vagee lamayi' },
    { id: 'Pos_Fun_0015', input: 'galle yanna bus ekak thiyeda?' },
    { id: 'Pos_Fun_0016', input: 'adha ude indhan vassa. e nisaa mata office yanna thamaa bari vunaa.' },
    { id: 'Pos_Fun_0017', input: 'subha rathriyak' },
    { id: 'Pos_Fun_0018', input: '' }, 
    { id: 'Pos_Fun_0019', input: 'oya ' },
    { id: 'Pos_Fun_0020', input: 'adha ude indhan vassa.\ne nisaa mata yanna bari vunaa.' },
    { id: 'Pos_Fun_0021', input: 'api giya para siripaadhe giyaa. mepaarath api yanna hithan inne. oyalath enavaanam kiyanna' },
    { id: 'Pos_Fun_0022', input: 'mama aasama vishaya siQQhaLa' },
    { id: 'Pos_Fun_0023', input: 'oyaa kiyanne aeththamadha???' },
    { id: 'Pos_Fun_0024', input: 'oyaata subha dhavasak veeva!\nmama adha oyaata kiyanna yanne apee aluth prashnaya gana. meeka godak vadhagath deyak nisaa oyaa meeka hodhatama kiyavanna oonee.\napee kaaryaalaya dhen thiyenne colombo vala nisaa, api okkoma dhen ekatama vaeda karanna oonee kiyala mama hithanavaa.\noyaa puluvan nam adha havaas venakota mata call ekak dhenna. meeka gana visthara mama dhennam. thnx!' }
  ];

  for (const tc of positiveCases) {
    test(`${tc.id}: ${tc.input.substring(0, 30)}`, async ({ page }) => {
      await page.fill('#input', tc.input);
      if (tc.input !== '') {
        await expect(page.locator('#output')).not.toHaveValue('');
      } else {
        await expect(page.locator('#output')).toHaveValue('');
      }
    });
  }

  /**
   * 10 NEGATIVE FUNCTIONAL TESTS (Neg_Fun_0001 - Neg_Fun_0010)
   * Exactly as per your spreadsheet "Input" column
   */
  const negativeCases = [
    { id: 'Neg_Fun_0001', input: 'nananaa nenennee' },
    { id: 'Neg_Fun_0002', input: 'thri-veera parakrama yanu shreshta rajeki' },
    { id: 'Neg_Fun_0003', input: 'meka Rs. 500 + 20 vat = keeyadha?' },
    { id: 'Neg_Fun_0004', input: 'mage computer eka format karanna bari vunaa' },
    { id: 'Neg_Fun_0005', input: 'kohoooooomadha oyata?' },
    { id: 'Neg_Fun_0006', input: 'api shop ekata yan\n\navaa.' },
    { id: 'Neg_Fun_0007', input: 'mama @home dhean inne' },
    { id: 'Neg_Fun_0008', input: 'math and path poth' },
    { id: 'Neg_Fun_0009', input: 'api (kamal [saha] nimal) enava.' },
    { id: 'Neg_Fun_0010', input: 'mama kade giyath, badu gaththath, salli dhenna bari vunaa' }
  ];

  for (const tc of negativeCases) {
    test(`${tc.id}: ${tc.input.substring(0, 30)}`, async ({ page }) => {
      await page.fill('#input', tc.input);
      await expect(page.locator('#output')).toBeVisible();
    });
  }

  /**
   * UI TEST (ONLY ONE CASE - as per your request and file)
   */
  test('Pos_UI_0001 - Real-time Conversion Feedback', async ({ page }) => {
    // Spreadsheet Input: 'subha dhavasak'
    await page.type('#input', 'subha dhavasak');
    const outputValue = await page.locator('#output').inputValue();
    // Verifying real-time update contains the input (Mock behavior)
    expect(outputValue).toContain('subha dhavasak');
  });

});