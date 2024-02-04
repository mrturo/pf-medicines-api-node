select
  ty.mtyp_id,
  ty.mtyp_name
from
  public.pf_med_type ty
where
  ty.mtyp_id = $1
order by
  ty.mtyp_id asc;