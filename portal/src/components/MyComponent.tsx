import React, { useState, useEffect } from 'react';
import { safeDirectusCall } from '@/utils/directusApi';
import { directus } from '@/lib/directus'; // Assume this is where your Directus instance is configured

interface MyDataType {
  id: string;
  name: string;
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<MyDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await safeDirectusCall(
        () => directus.items('my_collection').readByQuery({}),
        []
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name || 'Unnamed'}</div>
      ))}
    </div>
  );
};

export default MyComponent;
