import create from '../../army/create';
import * as event from '../../events/event.json';

test('Create Army', async () => {
    const funEvent = event;
    funEvent.pathParameters = { armyCount: Math.floor(Math.random() * 100000) + 1 };
    const response = await create(event);
    const testResponse = expect(response);
    testResponse.toHaveProperty('success', true);
    testResponse.toHaveProperty('data');
    testResponse.toHaveProperty('message');
});

test('Should throw error of incorrect army count provided', async () => {
    const funEvent = event;
    funEvent.pathParameters = { armyCount: 0 };
    const response = await create(event);
    const testResponse = expect(response);
    testResponse.toHaveProperty('success', false);
    testResponse.toHaveProperty('message');
});