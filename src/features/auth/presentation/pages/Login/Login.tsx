import React, { useEffect } from 'react';
import { LoginForm } from '../../components/LoginForm';
import { useRouter } from 'next/navigation';
import { AuthLocalDataSourceImpl } from '@/features/auth/data/data-sources/auth-local-data-source';

export type LoginProps = {
}

const Login: React.FC<LoginProps> = ({ }) => {
	const router = useRouter();

	useEffect(() => {
		const authLocalDataSource = new AuthLocalDataSourceImpl();
		if (authLocalDataSource.getToken()) {
			router.push("/dashboard");
		}
	}, []);


	return (
		<section className="dark:bg-dark bg-light min-h-screen flex items-center justify-center">
			<LoginForm />
		</section>
	);
};

export default Login;
