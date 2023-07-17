import { ref } from 'vue'

const localUser = ref(null)

export const useAuth = () => {
  const isLoading = ref(false)
  const hasFailed = ref(false)  
  const localError= ref(null)

  return {
    isLoading,
    hasFailed,
    user: localError,
    error: localError
  }
}