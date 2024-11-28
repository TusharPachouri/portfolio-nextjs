import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Contact Form Submission</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New contact message from {name}</Preview>
      <Section>
        <Row>
          <Heading as="h2">New Contact Form Submission</Heading>
        </Row>
        <Row>
          <Text>
            You have received a new message from your contact form. Below are the details:
          </Text>
        </Row>
        <Row>
          <Text><strong>Name:</strong> {name}</Text>
        </Row>
        <Row>
          <Text><strong>Email:</strong> {email}</Text>
        </Row>
        <Row>
          <Text><strong>Subject:</strong> {subject}</Text>
        </Row>
        <Row>
          <Text><strong>Message:</strong></Text>
          <Text>{message}</Text>
        </Row>
        <Row>
          <Text>
            This message was submitted via your contact form. Please respond accordingly.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
