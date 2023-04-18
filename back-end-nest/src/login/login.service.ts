import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

  /**
   * Cria um usuário no banco de dados
   */
  async create(
    createLoginDto: CreateLoginDto,
  ): Promise<Omit<Login, 'password'>> {
    const login = new Login();
    login.username = createLoginDto.username;
    login.password = createLoginDto.password;
    login.isAdmin = createLoginDto.isAdmin;
    const savedLogin = await this.loginRepository.save(login);
    delete savedLogin.password;
    return savedLogin;
  }

  /**
   * Cria um usuário root, se o mesmo não já existir.
   * É chamada só na inicialização do sistema
   */
  async setRoot(createLoginDto: CreateLoginDto) {
    return this.create(createLoginDto)
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Retorna todos os usuários
   */
  findAll() {
    return this.loginRepository.find();
  }

  /**
   * Torna o usuáio com o id passado admin
   */
  makeAdmin(id: number) {
    return this.loginRepository.update({ id }, { isAdmin: true });
  }

  /**
   * Remove admin do usuáio com o id passado
   */
  removeAdmin(id: number) {
    return this.loginRepository.update({ id }, { isAdmin: false });
  }

  /**
   * Encontra usuário pelo username
   */
  findByUsername(username: string) {
    return this.loginRepository.findOne({ where: {username}});
  }
}
