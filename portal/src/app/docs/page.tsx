import dynamic from 'next/dynamic';
import { specs } from '@/lib/swagger'
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const DocsPage = () => {
    return <SwaggerUI spec={specs} />;
};

export default DocsPage;