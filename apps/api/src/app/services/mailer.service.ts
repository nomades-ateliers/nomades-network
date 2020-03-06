import { Injectable, BadRequestException } from '@nestjs/common';
import { MailerService, ISendMailOptions } from '@nest-modules/mailer';
import { environment } from '../../environments/environment';

export const EMAIL_DEFAULT = {
  register: {
    to: null, // list of receivers
    from: null, // sender address
    subject: `[Nomades World] Confirmation d'inscription ✔`, // Subject line
    text: (url: string) => `
      Bienvenu sur Nomades World.
      Veullez vous rendre sur cette adresse pour confirmer votre email et valider votre compte.
      ${url}
    `, // plaintext body
    html: (url: string) => `
      <p>
        Bienvenu sur Nomades World.<br/>
        Veullez vous rendre sur cette adresse pour confirmer votre email et valider votre compte.
      </p>
      <a href="${url}" target="_blank">
        confirmer mon compte Nomades World avec mon email.
      </a>
    `, // HTML body content
  },
  default: {
    to: 'nicolas@nomades.ch', // list of receivers
    from: environment.mailer.from, // sender address
    subject: `[Nomades World] Test: default subject`, // Subject line
    text: `
      Default plain text
    `, // plaintext body
    html: `
      <p>
        Default HTML text
      </p>
    `, // HTML body content
  }
};

@Injectable()
export class AppMailerService {

  constructor(
    private readonly mailerService: MailerService
  ) {}

  async sendMail(options: ISendMailOptions = null) {
    const {
      to = EMAIL_DEFAULT['default'].to,
      from = EMAIL_DEFAULT['default'].from,
      subject = EMAIL_DEFAULT['default'].subject,
      text = EMAIL_DEFAULT['default'].text,
      html = EMAIL_DEFAULT['default'].html,
    } = options || {};
    if (!from || !to){
      throw new BadRequestException('No sender or recever available to send email with Nestjs Mailer'); 
    }
    // console.log('to send--->', {to, from, subject, text, html});
    return await this.mailerService
      .sendMail({to, from, subject, text, html})
      .then(() =>({result: true}))
      .catch((error) => ({result: false, error}));
  }

}
