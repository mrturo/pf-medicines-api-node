select
  bm.mbme_id,
  bm.mbme_name,
  bm.mtyp_id,
  bm.mman_id
from
  public.pf_med_branded_medicine bm
order by
  bm.mbme_id asc;