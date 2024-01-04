import React from 'react';

type EmailTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, subject, message,
}) => (
  <div>
    <h1>Subject: {subject}</h1>
    <br />
    <p>{name} ({email}) has submitted the contact form on your website. Their
      message is: 
      <br />
      {message}
    </p>
  </div>
);