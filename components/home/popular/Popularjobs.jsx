import React, { useState, useEffect } from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES, data } from '../../../constants'
import PopularJobCard from './../../common/cards/popular/PopularJobCard';
/* import useFetch from "../../../hook/useFetch"; */

const Popularjobs = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsData = data;

  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${itemsData.indexOf(item)}`)
    setSelectedJob(item.job_id);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={itemsData}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs