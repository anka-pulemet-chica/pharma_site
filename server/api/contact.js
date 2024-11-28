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
        from: '"Your Website" <kubak.kavy@gmail.coma>', 
        to: 'anna.kavaliov@gmail.com',                    
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