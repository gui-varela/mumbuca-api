import { PrismaService } from './database/PrismaService';
import { UserService } from './modules/accounts/user/user.service';

const prisma = new PrismaService();
const userService = new UserService(prisma);

async function backup() {
  await prisma.agency.createMany({
    data: [
      {
        id: '27bb44d5-2403-4723-a900-6e3b6d8fdb94',
        name: 'Inoã',
        address: 'Rua Genérica, 1300',
        createdAt: '2022-12-18T02:24:31.147Z',
      },
      {
        id: '0689d9a6-c60f-4ba4-949e-7aa95116340e',
        name: 'Centro',
        address: 'Avenida de Maricá, 900',
        createdAt: '2022-12-18T03:28:50.310Z',
      },
      {
        id: '1e6a6ecf-3a47-45dd-b947-ed37488b8401',
        name: 'Itaipuaçu',
        address: 'Rua do Coiso, 900',
        createdAt: '2022-12-18T02:27:47.332Z',
      },
    ],
  });

  await prisma.forwarding.createMany({
    data: [
      {
        id: '247b1572-63da-469c-b935-e0515e2a5a1d',
        name: 'Balcão',
        description: 'Assustos gerais relacionados ao banco',
      },
      {
        id: '900d2a21-b29d-4795-81bb-87ff71ef8449',
        name: 'Crédito',
        description:
          'Dedicado a solicitação de crédito e outros assuntos relacionados',
      },
      {
        id: '9deb381b-cb15-4b6e-940e-99076e8f55a7',
        name: 'e-Dinheiro',
        description:
          'Dedicado a resoluções de problemas relacionados ao e-Dinheiro',
      },
      {
        id: '4023e165-5e1a-4da8-9998-4bfcc5f5a268',
        name: 'Comércio',
        description: 'Dedicado a solicitação de crédito para o comerciantes',
      },
      {
        id: 'e17df602-8b9c-4188-9bd3-70cad0cb312d',
        name: 'Outro',
        description:
          'Dedicado a outros assuntos não cobertos pelos demais balcões',
      },
    ],
  });

  await prisma.attendanceType.createMany({
    data: [
      {
        id: 'c1dfaa50-3c05-44bd-803c-5dcdc26b26b5',
        name: 'Verificação de Conta',
        description: 'Serviço de verificação de conta',
        createdAt: '2022-12-18T03:56:47.936Z',
      },
      {
        id: '17f88806-f271-43d9-80bc-0b7406af457e',
        name: 'Solicitação de Saldo/Extrato',
        description: 'Serviço de solicitação de Saldo/Extrato',
        createdAt: '2022-12-18T03:57:29.095Z',
      },
      {
        id: '12818010-b44d-4488-a474-62eb1d9ded75',
        name: 'Solicitação de segunda via do cartão',
        description: 'Serviço de solicitação de segunda via do cartão',
        createdAt: '2022-12-18T03:57:55.795Z',
      },
      {
        id: 'e567a293-4ebc-4a31-91d5-232425fb92d9',
        name: 'Solicitação de acerto de cadastro',
        description: 'Serviço de solicitação de acerto de cadastro',
        createdAt: '2022-12-18T03:58:12.438Z',
      },
      {
        id: '149b5d54-6aae-4642-9e4b-d4be3d1d7c53',
        name: 'Solicitação de troca de titularidade',
        description: 'Serviço de solicitação de troca de titularidade',
        createdAt: '2022-12-18T04:00:22.243Z',
      },
      {
        id: '67da209f-61d5-46e6-b2bb-686970c2e712',
        name: 'Solicitação de troca de email',
        description: 'Serviço de solicitação de troca de email',
        createdAt: '2022-12-18T04:00:48.108Z',
      },
      {
        id: '081233c3-63ff-429c-b822-8d96e5f52298',
        name: 'Solicitação de cadastro de dados bancários',
        description: 'Serviço de solicitação de cadastro de dados bancários',
        createdAt: '2022-12-18T04:01:06.688Z',
      },
      {
        id: 'a3994fce-d0f0-4b91-b3f3-521999d1e125',
        name: 'Solicitação de acesso web',
        description: 'Serviço de solicitação de acesso web',
        createdAt: '2022-12-18T04:01:31.006Z',
      },
      {
        id: 'bfd1c70b-5cb2-42fc-8d3a-8a3d4bea469f',
        name: 'Solicitação de duplo fator',
        description: 'Serviço de solicitação de duplo fator',
        createdAt: '2022-12-18T04:02:18.171Z',
      },
      {
        id: '61decf6a-9e71-4a01-85fa-a21ee626464b',
        name: 'Solicitação de nova tentativa de verificação de conta',
        description:
          'Serviço de solicitação de nova tentativa de verificação de conta',
        createdAt: '2022-12-18T04:02:43.388Z',
      },
      {
        id: 'e307ae93-28f6-4c32-878f-f38586a36eeb',
        name: 'Solicitação de depósito de moeda social',
        description: 'Serviço de solicitação de depósito de moeda social',
        createdAt: '2022-12-18T04:03:05.142Z',
      },
      {
        id: 'ad22e510-4d2f-48bc-8401-3feb359ecd9c',
        name: 'Solicitação de saque de aluguel social',
        description: 'Serviço de solicitação de saque de aluguel social',
        createdAt: '2022-12-18T04:03:29.234Z',
      },
    ],
  });

  await prisma.customerType.createMany({
    data: [
      {
        id: 'cd541e22-f1bc-4168-a2d7-5e2d77a130d5',
        name: 'Beneficiário do Cartão Mumbuca RBC',
        created_at: '2022-12-18T05:05:32.540Z',
      },
      {
        id: 'e012c5b7-83b1-4079-9875-c0a3d2bc31fb',
        name: 'Beneficiário do PAT',
        created_at: '2022-12-18T05:05:42.628Z',
      },
      {
        id: '62d0871c-5e46-44ef-95ad-d0df9e02fba4',
        name: 'Beneficiário do Aluguel Social',
        created_at: '2022-12-18T05:05:49.632Z',
      },
      {
        id: '56737334-5655-4b97-8d30-e4853bfcb2b6',
        name: 'Beneficiário do Auxílio Recomeço',
        created_at: '2022-12-18T05:06:02.674Z',
      },
      {
        id: 'c3971518-e6be-4997-bc49-b14388142941',
        name: 'Correntista',
        created_at: '2022-12-18T05:07:35.486Z',
      },
      {
        id: '1087b77d-200f-4000-8f06-dec0b3ff0efe',
        name: 'Crédito MumbuCred',
        created_at: '2022-12-18T05:07:46.583Z',
      },
      {
        id: 'f5e96e58-fac7-4469-b411-2ed440e0fa2e',
        name: 'Comércio',
        created_at: '2022-12-18T05:07:53.814Z',
      },
      {
        id: 'fc9d6cad-88de-4e6a-87c5-305d99413530',
        name: 'Servidor Alimentação/Abono Natalino',
        created_at: '2022-12-18T05:08:09.854Z',
      },
      {
        id: 'cbc94463-6638-4a7c-b1e5-84710e7fd3a9',
        name: 'Visitante',
        created_at: '2022-12-18T05:08:27.148Z',
      },
    ],
  });

  await userService.create({
    name: 'Guilherme Varela',
    username: 'guilherme',
    password: '1234',
    updated_at: new Date(),
  });

  await prisma.customer.createMany({
    data: [
      {
        id: '896d4a53-bcdc-466a-a3ef-2f845b449790',
        name: 'Guilherme Varela',
        email: 'guilherme@gmail.com',
        cpf: '16164177731',
        identity: '291178838',
        birth_date: '1998-01-13T00:00:00.000Z',
      },
      {
        id: 'c8177885-6be1-46ea-be4f-fd8ef62540b9',
        name: 'Ezequiel Santos',
        email: 'ezequiel@gmail.com',
        cpf: '15165755278',
        identity: '295442667',
        birth_date: '1999-03-20T00:00:00.000Z',
      },
    ],
  });
}

backup()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
