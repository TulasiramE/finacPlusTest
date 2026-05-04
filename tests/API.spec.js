import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in/api';


test.describe('Reqres API Automation', () => {

  test('Create a new user', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/users`, {
      headers: {
        "x-api-key": "reqres_66f608ca2da14fcfbda8a7bc6cf8637b",
        "Content-Type": "application/json"
      },
      data:{
  "name": "Guruteja",
  "job": "QA Test Engineer"
}
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
   const userId = body.id;
    console.log(userId)
    expect(body.name).toBe('Guruteja');
    expect(body.job).toBe('QA Test Engineer');
  });


test('Get the user details', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/2`, {
    headers: { 
      "x-api-key": "reqres_66f608ca2da14fcfbda8a7bc6cf8637b"
     }
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.id).toBe(2);
});




  test('Update user name', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/users/2`, {
     headers: {
        "x-api-key": "reqres_66f608ca2da14fcfbda8a7bc6cf8637b",
        "Content-Type": "application/json"
      },
      data: {
        name: 'Guruteja DT',
        job: 'QA Automation Engineer'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('Guruteja DT');
    expect(body.job).toBe('QA Automation Engineer');
  });

});
