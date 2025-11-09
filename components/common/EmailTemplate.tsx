interface EmailTemplateProps {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phoneNumber,
  email,
  message
}) => (
  <div style={containerStyle}>
    <div style={headerStyle}>
      <h1 style={titleStyle}>Info Request</h1>
    </div>

    <div style={contentStyle}>
      <p style={introStyle}>
        A new info request has been submitted with the following details:
      </p>

      <div style={detailsContainerStyle}>
        <div style={detailRowStyle}>
          <span style={labelStyle}>Name: </span>
          <span style={valueStyle}> {name}</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>Phone Number: </span>
          <span style={valueStyle}> {phoneNumber}</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>Email: </span>
          <span style={valueStyle}> {email}</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>Message: </span>
          <span style={valueStyle}> {message}</span>
        </div>
      </div>
    </div>

    <div style={footerStyle}>
      <p style={footerTextStyle}>
        This is an automated message. Please review and respond to this request
        at your earliest convenience.
      </p>
    </div>
  </div>
);

// Styles
const containerStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  width: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  border: '1px solid #e2e8f0'
};

const headerStyle = {
  backgroundColor: '#3d3a38',
  background: 'linear-gradient(135deg, #3d3a38 0%, #5c5754 100%)',
  padding: '36px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

const titleStyle = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700' as const,
  margin: 0,
  textAlign: 'center' as const,
  letterSpacing: '-0.02em',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const contentStyle = {
  padding: '40px',
  backgroundColor: '#f8fafc',
  backgroundImage: 'linear-gradient(to bottom, #f8fafc, #ffffff)'
};

const introStyle = {
  fontSize: '18px',
  color: '#334155',
  marginBottom: '36px',
  textAlign: 'center' as const,
  lineHeight: '1.6',
  maxWidth: '600px',
  margin: '0 auto 36px'
};

const detailsContainerStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
  border: '1px solid #e2e8f0'
};

const detailRowStyle = {
  display: 'flex',
  padding: '16px 0',
  borderBottom: '1px solid #e2e8f0',
  alignItems: 'center',
  transition: 'background-color 0.2s ease',
  '&:lastChild': {
    borderBottom: 'none'
  },
  '&:hover': {
    backgroundColor: '#f8fafc'
  }
};

const labelStyle = {
  flex: '0 0 180px',
  fontWeight: '600',
  color: '#1e293b',
  fontSize: '16px',
  letterSpacing: '-0.01em'
};

const valueStyle = {
  flex: '1',
  color: '#334155',
  fontSize: '16px',
  paddingLeft: '8px',
  fontWeight: '500'
};

const footerStyle = {
  backgroundColor: '#f1f5f9',
  padding: '28px',
  borderTop: '1px solid #e2e8f0',
  background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)'
};

const footerTextStyle = {
  fontSize: '15px',
  color: '#64748b',
  textAlign: 'center' as const,
  margin: '0 auto',
  lineHeight: '1.6',
  maxWidth: '500px'
};
