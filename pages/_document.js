import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200&display=swap"
					rel="stylesheet"
				/>
				<title>OurFoods</title>
				<meta http-Equiv="Cache-Control" Content="no-cache" />
				<meta http-Equiv="Pragma" Content="no-cache" />
				<meta http-Equiv="Expires" Content="0" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
