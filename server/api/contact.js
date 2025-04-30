import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false, 
    auth: {
      user: 'kubak.kavy@gmail.com', 
      pass: 'ftqb wxhn tcwn vnme',   
    },
  });

  // const transporter = nodemailer.createTransport({
  //   host: 'exby.atservers.net',
  //   port: 587, // или 587 — можно протестировать оба
  //   secure: false, // true для порта 465 (SSL), false для 587 (STARTTLS)
  //   auth: {
  //     user: 'site@pharma-mg.by',
  //     pass: 'тWu40B3u_5N',
  //   },
  // });
  

  export default defineEventHandler(async (event) => {
    const body = await readBody(event);
  
    if (!body.name || !body.email || !body.service || !body.phone) {
      throw createError({
        statusCode: 400,
        statusMessage: 'All fields are required',
      });
    }
  
    try {
      await transporter.sendMail({
        from: 'Your Website', 
        to: 'info@pharma-mg.by',                    
        subject: `New Contact Form Submission from ${body.name}`, 
        text: `
          Name: ${body.name}
          Phone: ${body.phone}
          Email: ${body.email}
          Message: ${body.service}
        `,
      });
      console.log('Email sent successfully!');  
      return { message: 'Message sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email',
      });
    }
  });