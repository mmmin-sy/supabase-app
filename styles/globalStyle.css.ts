import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
	height: '100%',
	margin: 0,
});

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
	display: 'flex',
	flexDirection: 'column',
	margin: '0',
	fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	color: '#000',
	// padding: '0 16px',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundColor: "#3c424a"
});

globalStyle('h1, h2, h3, h4, p', {
	margin: 0,
});

globalStyle('ul', {
	display: "flex",
	listStyleType: "none",
	padding: "0",
	margin: "0"
});

globalStyle('main', {
	display: 'flex',
	alignItems: 'center',
	// justifyContent: 'center',
	flexDirection: 'column',
	position: 'relative',
	width: '100%',
	height: '100%',
	maxWidth: '720px',
	margin: '0 auto',
	overflow: 'hidden',
	padding: '0 16px',
});

globalStyle('header', {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	padding: "1rem",
	// backgroundColor: "#456990",
	color: "#fff",
	borderBottomStyle: "solid",
	borderBottomColor: "#3a3f47",
	borderBottomWidth: "thin"
	// #f06292
});

globalStyle('footer', {
	padding: "1.5rem 0",
	// borderTopStyle: "solid",
	// borderTopColor: "#f1faee",
	// borderTopWidth: "thin"
});