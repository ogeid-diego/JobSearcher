import React, { useState, useEffect } from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS, data } from '../../../constants'
import NearbyJobCard from './../../common/cards/nearby/NearbyJobCard';
/* import useFetch from "../../../hook/useFetch"; */

const Nearbyjobs = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsData = data;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          itemsData?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${itemsData.indexOf(job)}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs