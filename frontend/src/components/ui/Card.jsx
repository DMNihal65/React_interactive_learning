import React from 'react';

/**
 * Card component for displaying content with border and shadow
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display inside the card
 * @param {React.ReactNode} [props.header] - Optional header content
 * @param {React.ReactNode} [props.footer] - Optional footer content
 * @param {string} [props.className] - Additional CSS classes
 */
const Card = ({ children, header, footer, className = '', ...rest }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...rest}
    >
      {/* Card header if provided */}
      {header && (
        <div className="px-4 py-3 bg-gray-50 border-b">
          {header}
        </div>
      )}
      
      {/* Card content */}
      <div className="p-4">
        {children}
      </div>
      
      {/* Card footer if provided */}
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 