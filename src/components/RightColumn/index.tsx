import React from 'react';

import LoadingTrendingPanel from '../Shimmer/LaodingTrendingPanel';
import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProp> = ({ isLoading }) => {
     return (
          <Container className="right-column">
               {
                    isLoading ? (
                         <LoadingTrendingPanel />
                    ) : (
                         <>
                              <TrendingPanel />
                              <TrendingPanel />
                         </>
                    )
               }
          </Container>
     );
};

export default RightColumn;
