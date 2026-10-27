import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabase.js';

/**
 * Supabase programs 테이블에서 프로그램 목록을 불러오는 훅
 *
 * @returns {{ programs: Array, isLoading: boolean, hasError: boolean }}
 *
 * Example usage:
 * const { programs, isLoading, hasError } = usePrograms();
 */
function usePrograms() {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    supabase
      .from('programs')
      .select('*')
      .order('sort_order')
      .then(({ data, error }) => {
        if (isCancelled) return;
        if (error) setHasError(true);
        else setPrograms(data);
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { programs, isLoading, hasError };
}

export default usePrograms;
