import { Test, TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import { DatabaseModule } from '../../libs/db/database.module';

describe('AppController', () => {
  let entityManager: EntityManager;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    entityManager = module.get(EntityManager);
  });

  afterAll(async () => {
    await entityManager.connection.close();
  });

  it('DB 연결 테스트', async () => {
    // given
    const query = 'SELECT 1';

    // when
    const result = await entityManager.query(query);

    // then
    expect(entityManager.connection.isConnected).toBe(true);
    expect(result).toStrictEqual([{ 1: '1' }]);
  });
});
