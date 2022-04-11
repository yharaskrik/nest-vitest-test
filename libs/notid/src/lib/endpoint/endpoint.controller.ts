import { Controller } from '@nestjs/common';
import {createPrefixedId} from "@nest-vitest-test/id";

@Controller('endpoint')
export class EndpointController {
  id: string = createPrefixedId('prefix')
}
