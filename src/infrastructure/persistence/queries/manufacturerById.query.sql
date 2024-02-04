select
  ma.mman_id,
  ma.mman_name
from
  public.pf_med_manufacturer ma
where
  ma.mman_id = $1
order by
  ma.mman_id asc;