import { Test, TestingModule } from '@nestjs/testing';
import { EndpointController } from './endpoint.controller';
import {createPrefixedId} from "@nest-vitest-test/id";

import { PrismaClient } from '@prisma/core'
const prisma = new PrismaClient()

const id: string = createPrefixedId('prefix')
describe('EndpointController', () => {
  let controller: EndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndpointController],
    }).compile();

    controller = module.get<EndpointController>(EndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
